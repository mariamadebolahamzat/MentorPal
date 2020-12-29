import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {auth, firestore, authProvider} from '../config/firebase';
import * as Google from 'expo-google-app-auth';


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

    const isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
          var providerData = firebaseUser.providerData;
          for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === authProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
              // We don't need to reauth the Firebase connection.
              return true;
            }
          }
        }
        return false;
      }

    const onSignIn = (googleUser) => {
        console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
          unsubscribe();
          // Check if we are already signed-in Firebase with the correct user.
          if (!isUserEqual(googleUser, firebaseUser)) {
            // Build Firebase credential with the Google ID token.
            var credential = authProvider.credential(
                googleUser.idToken,
                googleUser.accessToken
                );
      
            // Sign in with credential from the Google user.
            auth.signInWithCredential(credential).then((result) => {
                console.log('user signed up');
                console.log(result)
                const profile = firestore.collection('users').doc(result.user.uid);
                profile.set({
                    fullname: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL

                })

            }).catch((error) => {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
          } else {
            console.log('User already signed-in Firebase.');
          }
        });
      }

 const signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            androidClientId: '874785362525-e6tonhkjuk5am0tshev68ljqpqmh1gse.apps.googleusercontent.com',
            //iosClientId: YOUR_CLIENT_ID_HERE,
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
              onSignIn(result);
              navigation.navigate('Signin')
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      }
    
    return (
        <View style={styles.container}>
            <Image source={require('../assets/MentorPal.logo.png')} style={styles.logoImage} />
            <Formik
            initialValues={{fullname: '', email: '', password: ''}}
            onSubmit={values => handleSignup(values)}
            validationSchema={signupvalidationSchema}
            >
        {({handleChange, handleBlur, handleSubmit, values, errors}) =>  (
            <View style={{width: "100%"}}>
            <Text style={{textAlign: 'center'}}> {errorMsg && <Text style={{color: 'red'}}>{errorMsg}</Text>} </Text>
            <TextInput
              placeholder="Enter Fullname"
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
            )}
            <TouchableOpacity onPress={signInWithGoogleAsync} style={styles.button}>
                  <Text style={styles.buttonText}>Continue with Google</Text>
                </TouchableOpacity> 
            
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