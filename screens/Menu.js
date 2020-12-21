import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Home';
import Profile from './Profile';
import About from './About';
import ContactUs from './ContactUs';
import Settings from './Settings';

const Drawer = createDrawerNavigator();

const Menu = () => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact Us" component={ContactUs} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>

  );
}

export default Menu;