import React from 'react';
import {useContext} from 'react';
import { Text, View ,FlatList, Image } from 'react-native';
import styles from './styles';
import {Song} from '../../types'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {AppContext} from '../../AppContext'

export type SongListItemProps ={
    song : Song
}

const SongListItem = (props:SongListItemProps) => {
    const {song} = props;

    const {setSongId} = useContext(AppContext);

    const onPlay = () => {
        setSongId(song.id);
     
    }
    
    
    return(
        <TouchableOpacity onPress={onPlay}>
        <View style={styles.container}>
            {/* {image cover
            title
            artist} */}
            <Image source ={ {uri:song.imageUri}} style={ styles.image} />
            <View style={styles.rightContainer}>
                <Text style={ styles.title}>{song.title}</Text>
                <Text style={ styles.artist}> {song.artist}</Text>
            </View>
            </View>
            </TouchableOpacity>
        
    )
}

export default SongListItem;