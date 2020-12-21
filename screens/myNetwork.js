import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const myNetwork = () => {
    return (
        <View style={styles.container}>
            <Text>Mentors you have connected with</Text>
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

export default myNetwork;