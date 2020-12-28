import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const ContactUs = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Contact Us</Text>
            <Text style={styles.text}>Tolulope Animashaun: 08188387843 (toluannie@gmail.com)</Text>
            <Text style={styles.text}>Mariam Hamzat: 07010670317 (titilayobolamide247@gmail.com)</Text>
            <Text style={styles.text}>Ifeoluwa Adesanya: 08094116163 (adexifeoluwa@gmail.com)</Text>
            <Text style={styles.text}>Tolulope Fabunmi: 07063740223 (ogunronbitolulope@gmail.com)</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
        

    }
})

export default ContactUs;