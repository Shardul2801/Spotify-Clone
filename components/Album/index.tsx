import React from 'react';
import{ View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import {Album} from '../../types';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation';


export type AlbumProps ={
    album:Album
}


const AlbumComponent = (props: AlbumProps) => {
    const navigation = useNavigation();

        const onPress = () => {
        navigation.navigate('AlbumScreen', {id: props.album.id})
    }
    
    return(
        <TouchableWithoutFeedback onPress ={onPress}>
        <View style={styles.container}>
            <Image source={{uri: props.album.imageUri}}  style={styles.image}/>
            <Text style={styles.text}> {props.album.artistsHeadline} </Text>
            {/* This will contain image of album */}
            {/* Artist headline */}
        </View>    
        </TouchableWithoutFeedback>
    )

}

export default AlbumComponent;