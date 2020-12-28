import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';


import Home from './Home';
import myNetwork from './myNetwork';
import Notifications from './Notifications';
import Messages from './Messages';


const Tab = createBottomTabNavigator();

 
const Dashboard = () => {

return (
        
        <Tab.Navigator
             screenOptions={({route}) => ({
                 tabBarIcon: ({focused, color, size})  => {
                     let iconName;

                     if (route.name === 'Home') {
                         iconName = focused
                         ? 'ios-home'
                         : 'ios-home'
                     } else if (route.name === 'My Network') {
                        iconName = focused
                        ? 'ios-people'
                        : 'ios-people'
                     } else if (route.name === 'Notifications') {
                        iconName = focused
                        ? 'ios-notifications'
                        : 'ios-notifications'
                     } else if (route.name === 'Messages') {
                        iconName = focused
                        ? 'ios-mail'
                        : 'ios-mail'
                     }
                     return <Ionicons name={iconName} size={size} color={color} />
                    }
             })}
             tabBarOptions={{
                 activeTintColor: '#2f6cd1',
                 inactiveTintColor: 'gray',
                 labelStyle: {
                     fontSize: 12,
                 },
             }}
            
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="My Network" component={myNetwork}/>
            <Tab.Screen name="Notifications" component={Notifications}/>
            <Tab.Screen name="Messages" component={Messages}/>
        </Tab.Navigator>
    )
};

export default Dashboard;


