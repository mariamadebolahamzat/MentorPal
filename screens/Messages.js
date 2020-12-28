import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Messages = () => {
    return (
        <View style={styles.container}>
            <Text>Receive messages here</Text>
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

export default Messages;