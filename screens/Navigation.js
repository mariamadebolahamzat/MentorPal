import React, {useContext} from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from './Onboarding';
import Landing from './Landing';
import Signin from './Signin';
import Signup from './Signup';
import Menu from './Menu';
import {userContext} from '../context/userContext';

const Logo = () => {
    return (
      <Image
        style={{ width: 100, height: 50, borderRadius: 100 }}
        source={require('../assets/logo.png')}
      />
    );
  }



const Stack = createStackNavigator();

const Navigation = () => {
    const {user} = useContext(userContext);
    
    if(user){
        return (
            <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen options={{headerShown: true,
         headerTitle: props => <Logo {...props}/>
        }} 
         name="Dashboard"component={Menu}/> 
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

 
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Onboarding" component={OnboardingScreen}/>
        <Stack.Screen options={{headerShown: false}} name="Landing" component={Landing} />
        <Stack.Screen 
        options={{
          headerTitleAlign: "center", 
          headerStyle:{ 
            backgroundColor: 'blue' 
            },
            headerTitleStyle: {
              color: "white"
            },
            headerTintColor: "white"
            }} name="Signin" component={Signin} />
        <Stack.Screen 
        options={{
          headerTitleAlign: "center", 
          headerStyle:{ 
            backgroundColor: '#2f6cd1',
            },
            headerTitleStyle: {
              color: "white"
            },
            headerTintColor: "white"
            }}
        name="Signup" 
        component={Signup}
         /> 
        </Stack.Navigator>
    </NavigationContainer>

  )
};
        
export default Navigation;

