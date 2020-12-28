import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>About Us</Text>
            <Text style={styles.text}>MentorPal is an app where students in secondary schools and uiversities can have access to mentorship from top professionals in different fields.</Text>
       <Text style={styles.text}>It was created by a group of ladies with a drive to make change in their society, one way or the other.</Text>
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
    },
})

export default About;