import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {auth, authProvider, persistence} from '../config/firebase';
import * as Google from 'expo-google-app-auth';


const signinvalidationSchema = yup.object().shape({
    email: yup.string()
     .required('Required*')
     .email('Invalid Email'),
    password: yup.string()
    .required('Required*')
});

const Signin = ({navigation}) => {
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            androidClientId: '874785362525-e6tonhkjuk5am0tshev68ljqpqmh1gse.apps.googleusercontent.com',
            //iosClientId: YOUR_CLIENT_ID_HERE,
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
              await auth.setPersistence(persistence);
              const credential = authProvider.credential(result.idToken, result.accessToken);
              const googleProfileData = await auth.signInWithCredential(credential);
              navigation.navigate('Home');
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      }


    const handleLogin = async (values) => {
        try {
            const {email, password} = values;
            const {user} = await auth.signInWithEmailAndPassword(email, password);
            navigation.navigate('Home');
            console.log(user);  
        } catch (error) {
            console.log(error);
            if (error.code === 'auth/user-not-found'){
                setErrorMsg('Invalid email address or password')
                setIsLoading(false);
            }
            if (error.code === 'auth/wrong-password'){
                setErrorMsg('Invalid email address or password')
                setIsLoading(false);
            }
        }
        

    }


    return (
        <View style={styles.container}>
            <Image source={require('../assets/MentorPal.logo.png')} style={styles.logoImage} />
            <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => handleLogin(values)}
            validationSchema={signinvalidationSchema}
            >
             {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View style={{width: "100%"}}>
            <Text style={{textAlign: 'center'}}> {errorMsg && <Text style={{color: 'red'}}>{errorMsg}</Text>} </Text>
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
              autoCapitalize="none"
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')} 
               
            />
            {errors.password && <Text style={styles.errorText}>{errors.password} </Text>}
            {isLoading ? (
               <TouchableOpacity onPress={handleSubmit} disabled={!values.email || !values.password} style={!values.email || !values.password ? styles.DisabledButton : styles.button}>
               <ActivityIndicator size='small' color="#fff" />
               </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={handleSubmit} disabled={!values.email || !values.password} style={!values.email || !values.password ? styles.DisabledButton : styles.button}>
                  <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity> 
            )}
            <TouchableOpacity onPress={signInWithGoogleAsync} style={styles.button}>
                  <Text style={styles.buttonText}>Continue with Google</Text>
                </TouchableOpacity>
            <Text>Don't Have An Account? <Text style={styles.signup} onPress={() => navigation.navigate('Signup') }>Sign Up</Text></Text>

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
    signup: {
        color :"#2f6cd1"
    },
    errorMsg: {
        color: "red",
        textAlign: "center",
        paddingVertical: 10
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
export default Signin;