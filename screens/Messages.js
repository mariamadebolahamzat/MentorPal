import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { withInAppNotification } from 'react-native-in-app-notification';
import { API_KEY } from 'react-native-dotenv';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, MessageList, MessageInput } from 'stream-chat-expo';

const chatClient = new StreamChat(API_KEY);
const userToken = API_TOKEN;
const user = {
  id: 'green-heart-8',
  name: 'Tolulope Animashaun',
};

chatClient.setUser(user, userToken);

class Messages extends Component {
  render() {
    const channel = chatClient.channel('messaging', 'green-heart-8');
    channel.watch();

    channel.on('message.new', event => {
      const message = channel.state.messages[channel.state.messages.length - 1];

      if (message.user.id !== chatClient.user.id) {
        this.props.showNotification({
          title: 'Stream Notification',
          message: `${message.user.name} says: ${message.text}`
        });
      }
    });

    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <Channel channel={channel}>
            <View style={{ display: 'flex', height: '100%' }}>
              <MessageList />
              <MessageInput />
            </View>
          </Channel>
        </Chat>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default withInAppNotification(Messages);