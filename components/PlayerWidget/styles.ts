import {StyleSheet} from 'react-native';
// import Colors from '../../constants/Colors'

const styles= StyleSheet.create ({
    container: {
        position:'absolute',
        bottom: 49,
        backgroundColor: '#131313',
        flexDirection: 'column',
        width:' 100%',
        borderWidth: 2,
        borderColor: 'black',
        
     
    },
    progress: {
        height: 2,
        
        backgroundColor: '#bcbcbc'
    },
    row: {
        flexDirection: 'row',

    },
    image: {
        width: 75,
        height:75,
        marginRight:10,
    },
    rightContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
        
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around',
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
    artist: {
        color: 'lightgray',
        fontSize: 18,
    }
})

export default styles;