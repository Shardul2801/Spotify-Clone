import React from 'react';
import {Album} from '../../types';
import {View,Text ,Image, TouchableOpacity} from 'react-native';
import styles from '../AlbumHeader/styles';

export type AlbumHeaderProps ={
    album: Album;
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    const {album} = props;
    return(
        <View style={styles.container}>
            <Image source={{ uri: album.imageUri}} style={styles.image} />
            <Text style={styles.name}> {album.name}</Text>
            <View style={styles.createrConatiner}>
                <Text style={ styles.creater}>By {album.by}</Text> 
                <Text style= {styles.likes}> {album.numberOfLikes} Likes</Text>
                 
                </View>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text>PLAY</Text>
                    </View>
                </TouchableOpacity>

        </View>
    )
}

export default AlbumHeader;