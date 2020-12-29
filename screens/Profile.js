import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {userContext} from '../context/userContext';

const Profile = () => {
    const {fullname} = useContext(userContext)
    return (
        <View style={styles.container}>
            <Text>Welcome {fullname}</Text>
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

export default Profile;