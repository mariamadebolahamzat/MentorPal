import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Menu from './Menu';


const Home = () => {
    return (
        <View>
             <Menu/> 
        <View style={styles.container}>
            <Text>This is the Home Page</Text>
        </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Home;