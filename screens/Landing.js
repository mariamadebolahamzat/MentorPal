import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Landing = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/MentorPal logo.png')} style={styles.logoImage} /> 
            <Text style={styles.logoText}> MentorPal </Text>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>Inspiring Aspiring Leaders </Text>
            </View>
                <TouchableOpacity style={styles.buttonSignup} onPress={() => navigation.navigate('Signup')} >
                    <Text style={styles.signupText}> Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSignin} onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.signinText}> Sign In</Text>
                </TouchableOpacity>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "80%"
    },
    logoImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    logoText: {
        fontSize: 20,
        fontWeight: "600",
        padding: 10
    },
    textWrapper: {
        marginTop: 20,
        marginBottom: 60
    },
    text:{
        textAlign: "center",
        fontSize: 18,
        fontWeight: "100"
    },
    buttonSignup:{
        backgroundColor: "#2f6cd1",
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginVertical: 10,
        width: "100%"
    },
    signupText:{
        color: "white",
        textAlign: "center"
    },
    buttonSignin:{
        borderColor: "#2f6cd1",
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginVertical: 10,
        width: '100%'
    },
    signinText:{
        color: "black",
        textAlign: "center",
    }
})

export default Landing;