import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';


import {userContext} from '../context/userContext';

import {auth, firestore} from '../config/firebase';


const UserProvider = ({children}) => {
  
    const [fullname, setFullname] = useState('');
    const [loading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async(user) => {
      if (user) {
        const profile = await firestore.collection('users').doc(user.uid).get();
        if (profile.exists){
            setIsLoading(false);
            setFullname(user.displayName);
            setUser(profile.data());
        }
     else{
            setIsLoading(false)
        }
     } else{
           setIsLoading(false)
        console.log('not logged in')
      }
    })
  },[]);

const handleLogout =() => {
    auth.signOut();
    setUser(null)
}

  if (loading){
      return (
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <ActivityIndicator size="large" color="blue"/>
          </View>
      )
  }
  return (
    <userContext.Provider value={{handleLogout, fullname, user}}>
        {children}
    </userContext.Provider>
  )
};
        
export default UserProvider;

