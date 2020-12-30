import React from 'react';
import {Button, TextInput} from 'react-native';

const CreatePost= ({navigation}) => {
    const [postText, setPostText] = React.useState('');
  
    return (
      <>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={{ height: 200, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="Done"
          onPress={() => {
            // Pass params back to home screen
            navigation.navigate('Home', { post: postText });
          }}
        />
      </>
    );
  }

  export default CreatePost;