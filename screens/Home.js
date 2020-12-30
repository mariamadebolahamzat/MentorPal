import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({route}) => {
    React.useEffect(() => {
      if (route.params?.post) {
        // Post updated, do something with `route.params.post`
        // For example, send the post to the server
      }
    }, [route.params?.post]);
  
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      </View>
    );
  }
  
  export default Home;
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';



// const Home = () => {
//     return (

//         <View style={styles.container}>
//             <Text>This is the Home Page</Text>
//         </View>
    
        
//     )
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// })

// export default Home;