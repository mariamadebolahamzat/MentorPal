import React from 'react';
import { Image, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


import Onboarding from 'react-native-onboarding-swiper';



const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
const color = isLight => backgroundColor(!isLight);





const OnboardingScreen = ({navigation}) => {
    return(
     
      <Onboarding
    titleStyles={{ color: 'blue' }}
  pages={[
    {
      backgroundColor: '#fff',
      image: <><Image source={require('../assets/img-1.png')} style={{width: '100%', height: '60%'}}/><TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Landing')}><Text style={styles.buttonText}>Get Started</Text></TouchableOpacity></>,
      title: 'Relationship',
      subtitle: 'Learn from top professionals', 
    },
    {
      backgroundColor: '#fff',
    image: <><Image source={require('../assets/img-2.jpg')} /><TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Landing')}><Text style={styles.buttonText}>Get Started</Text></TouchableOpacity></>,
    title: 'Community', 
    subtitle: 'Build a support system',
    },
    {
      backgroundColor: '#fff',
      image: <><Image source={require('../assets/img-3.png')} /><TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Landing')}><Text style={styles.buttonText}>Get Started</Text></TouchableOpacity></>,
      title: 'Progress',
      subtitle: 'Let us help you reach your goal',
    },
  ]}
/>

    )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10  
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  }
});

export default OnboardingScreen;