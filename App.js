import React, {useState, useEffect} from 'react';
import {Image, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from './screens/Landing';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Menu from './screens/Menu';


import {auth} from './config/firebase';

const Logo = () => {
  return (
    <Image
      style={{ width: 100, height: 50, borderRadius: 100 }}
      source={require('./assets/logo.png')}
    />
  );
}



const Stack = createStackNavigator();
const App = () => {
  
    const [fullname, setFullname] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setFullname(user.displayName);
      } else {
        console.log('not logged in')
      }
    })
  },[]);
  return (
    <>
    <StatusBar backgroundColor="blue" barStyle="default" />
    <NavigationContainer>
       <Stack.Navigator>
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
         <Stack.Screen options={{headerShown: true,
         headerTitle: props => <Logo {...props}/>
        }} 
         name="Dashboard" component={Menu} 
         />
        </Stack.Navigator>
    </NavigationContainer>
    </>
  )

};
        
export default App;

