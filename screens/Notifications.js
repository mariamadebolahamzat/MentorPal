import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Notifications = () => {
    return (
        <View style={styles.container}>
            <Text>Get Notifications here</Text>
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

export default Notifications;