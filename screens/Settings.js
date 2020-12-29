import { auth } from 'firebase';
import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {userContext} from '../context/userContext';


const Settings = () => {
    const {handleLogout} = useContext(userContext)
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleLogout} style={styles.button}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        backgroundColor: "#2f6cd1",
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 20,
    },
})

export default Settings;