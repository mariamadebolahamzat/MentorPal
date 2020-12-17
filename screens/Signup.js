import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {auth, firestore} from '../config/firebase';


const signupvalidationSchema = yup.object().shape({
   fullname: yup.string()
    .required('Required*'),
   email: yup.string()
    .required('Required*')
    .email('Invalid Email'),
   password: yup.string()
   .required('Required*')
   .min(6)
});


const Signup = ({navigation}) => {
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = async(values) => {
      setIsLoading(true)
      try { 
        const {fullname, email, password} = values;
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        if (user){
        await user.updateProfile({
            displayName: fullname
        })
            const profile = firestore.collection('users').doc(user.uid);
            profile.set({
               fullname,
               email
           })
           setIsLoading(false)
           Alert.alert('Account created successfully');
       }
       navigation.navigate('Signin');
      } catch (error) {
          if (error.code === 'auth/email-already-in-use'){
              setErrorMsg('Email address already exist')
              setIsLoading(false)
          }
      }
        
    }

    
    return (
        <View style={styles.container}>
            <Image source={require('../assets/MentorPal logo.png')} style={styles.logoImage} />
            <Formik
            initialValues={{fullname: '', email: '', password: ''}}
            onSubmit={values => handleSignup(values)}
            validationSchema={signupvalidationSchema}
            >
        {({handleChange, handleBlur, handleSubmit, values, errors}) =>  (
            <View style={{width: "100%"}}>
            {errorMsg && <Text style={{color: 'red', textAlign: 'center'}}>{errorMsg}</Text>}
            <TextInput
              placeholder="Enter Full Name"
              autoCapitalize="none"
              style={styles.input}
              onChangeText={handleChange('fullname')}
              onBlur={handleBlur('fullname')}
              
            />
            {errors.fullname && <Text style={styles.errorText}>{errors.fullname} </Text>}
            <TextInput
              placeholder="Enter Email Address"
              autoCapitalize="none"
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
               
            />
            {errors.email && <Text style={styles.errorText}>{errors.email} </Text>}
            <TextInput
              placeholder="Enter Password"
              secureTextEntry
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')} 
              
            />
            {errors.password && <Text style={styles.errorText}>{errors.password} </Text>}
            {isLoading ? (
               <TouchableOpacity onPress={handleSubmit} disabled={!values.fullname || !values.email || !values.password} style={!values.fullname || !values.email || !values.password ? styles.DisabledButton : styles.button}>
               <ActivityIndicator size='small' color="#fff" />
               </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={handleSubmit} disabled={!values.fullname || !values.email || !values.password} style={!values.fullname || !values.email || !values.password ? styles.DisabledButton : styles.button}>
                  <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity> 
            ) }
            
            <Text>Already Have An Account? <Text style={styles.login} onPress={() => navigation.navigate('Signin') } >Sign In</Text></Text>

            </View>
        )}
            </Formik>
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
    input:{
        borderWidth: 1,
        borderColor: "black",
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginVertical: 5,
        width: "100%"
    },
    button: {
        backgroundColor: "#2f6cd1",
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginVertical: 10,
        width: "100%"
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    login: {
        color: "#2f6cd1"
    },
    errorText: {
        color: 'red',
        width: '100%',
    
    },
    DisabledButton:{
        backgroundColor: 'gray',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginVertical: 10,
        width: "100%"

    }
})
export default Signup;