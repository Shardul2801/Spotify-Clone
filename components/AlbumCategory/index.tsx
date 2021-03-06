import React from 'react';
import {View, Text, FlatList } from 'react-native';
import { Album } from '../../types';
import AlbumComponent from '../Album';
import styles from './styles'


export type AlbumCategoryProps = {
    title: string,
    albums: [Album],
}

const AlbumCategory = (props:AlbumCategoryProps) => { 
return (
    <View style= {styles.container}>
    
        <Text style= {styles.title}>{props.title}</Text>
        {/* tittle of AlbumCategory
        list of albums */}
        <FlatList
            data= {props.albums}
            renderItem ={({item}) => <AlbumComponent album ={item} /> }
            keyExtractor ={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
        />
    
    </View>
)
}


export default AlbumCategory;