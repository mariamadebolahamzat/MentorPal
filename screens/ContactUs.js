import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const ContactUs = () => {
    return (
        <View style={styles.container}>
            <Text>You can contact us through the following channels</Text>
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

export default ContactUs;