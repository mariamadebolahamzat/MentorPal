import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Profile = ({fullname}) => {
    return (
        <View style={styles.container}>
            <Text>Your Profile</Text>
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