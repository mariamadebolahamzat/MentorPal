import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';

import Dashboard from './Dashboard';
import Profile from './Profile';
import About from './About';
import ContactUs from './ContactUs';
import Settings from './Settings';

const Drawer = createDrawerNavigator();

const Menu = () => {
  return (

      <Drawer.Navigator InitialRouteName="Dashboard"
      screenOptions={({route}) => ({
        drawerIcon: ({focused, color, size})  => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused
                ? 'ios-home'
                : 'ios-home'
            } else if (route.name === 'Profile') {
               iconName = focused
               ? 'ios-person'
               : 'ios-person'
            } else if (route.name === 'About') {
               iconName = focused
               ? 'ios-information-circle'
               : 'ios-information-circle'
            } else if (route.name === 'Contact Us') {
               iconName = focused
               ? 'md-call'
               : 'md-call'
            } else if (route.name === 'Settings') {
              iconName = focused
              ? 'md-settings'
              : 'md-settings'
            }
            return <Ionicons name={iconName} size={size} color={color} />
           }
    })}
    drawerOptions={{
        activeTintColor: '#2f6cd1',
        inactiveTintColor: 'gray',
        labelStyle: {
            fontSize: 12,
        },
    }}
      >
        <Drawer.Screen name="Home" component={Dashboard}/>
        <Drawer.Screen name="Profile" component={Profile}/>
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact Us" component={ContactUs} />
        <Drawer.Screen name="Settings" component={Settings} />
        
      </Drawer.Navigator>
      
      

  );
}

export default Menu;