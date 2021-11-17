import React from 'react';
import {useEffect, useState,useContext} from 'react';
// import {Audio} from 'expo-av';
import { Text, View ,FlatList, Image} from 'react-native';
import {AntDesign, FontAwesome} from '@expo/vector-icons';
import styles from './styles';
// import {Song} from '../../types';
import {Sound} from 'expo-av/build/Audio/Sound'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { _DEFAULT_INITIAL_PLAYBACK_STATUS } from 'expo-av/build/AV';

import {AppContext} from '../../AppContext';


import {API, graphqlOperation} from 'aws-amplify';
import {getSong} from '../../src/graphql/queries';


const PlayerWidget = () => {

    const[song,setSong] = useState(null);
    const[sound, setSound] = useState<Sound|null> (null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const[duration, setDuration] = useState<number|null > (null);
    const[position, setPosition] = useState<number|null> (null);
    
    const {songId} = useContext(AppContext);

    useEffect( () => {
        const fetchSong= async () => {
          try {
            const data = await API.graphql(graphqlOperation(getSong,{id: songId}))
            setSong(data.data.getSong)
          }  catch (e) {
              console.log(e);
          }
        }
        
        
        fetchSong();
    }, [songId])
    
    
    const onPlaybackStatusUpdate = (status: any) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }

    const playCurrentSong = async () => {
        if(sound) {
            await sound.unloadAsync();             // destroys previous instance of sound
        }
        
        const {sound:newSound} = await Sound.createAsync(
          {uri : song.uri},
          { shouldPlay: isPlaying},
            onPlaybackStatusUpdate
        )
        setSound(newSound)

    }

    useEffect(() => {
        if(song) {
            playCurrentSong();
        }
        
    }, [song])


    const onPlayPausePress = async () => {
        if(!sound) {
            return;
        }
        if(isPlaying) {
            await sound.stopAsync();

        }else {
            await sound.playAsync();
        }
    }

    const getProgress =() => {
        if(sound===null || duration===null || position===null) {
            return 0;
        }

        return (position / duration) * 100;


    }


        if(!song) {
            return null;
        }
    
        return(
        <View style={styles.container}>
            {/* {image cover
            title
            artist} */}
            <View style={[styles.progress, {width:'${getProgress()}%'}]} />
            <View style={styles.row}>
            <Image source ={ {uri:song.imageUri}} style={ styles.image} />
            <View style={styles.rightContainer}>
            <View style={styles.nameContainer}>
                <Text style={ styles.title}>{song.title}</Text>
                <Text style={ styles.artist}> {song.artist}</Text>
            </View>    
                
            <View style={styles.iconsContainer}>    
                <AntDesign name='hearto' size={30} color={'white'} />
                <TouchableOpacity onPress={onPlayPausePress}>
                <FontAwesome name={isPlaying ? 'pause' : 'play'}size={30} color={'white'} />
                </TouchableOpacity>
            </View>    
            </View>
        
            </View>
           
        </View>
    )
}

export default PlayerWidget;