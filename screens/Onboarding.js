import React from 'raect';
import {View, Image, StyleSheet} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
    return(
      <Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('C:/Users/LENOVO/Desktop/MentorPal/assets/img 1.png')} />,
      title: 'Learn from top professionals',
      
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('C:/Users/LENOVO/Desktop/MentorPal/assets/img 2.png')} />,
      title: 'Build a support system',
     
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('C:/Users/LENOVO/Desktop/MentorPal/assets/img 3.png')} />,
      title: 'Let help you reach your goal',
     
    },
  ]}
/>
    )
}

export default OnboardingScreen;