import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import {
  registerForPushNotificationsAsync,
  sendPushNotification,
} from "../../services/pushNotificationService";
import { styles } from "./style";

const { input } = styles;

const PushNotificationScreen = () => {
  const [title, setTitle] = useState();
  const [message, setMessage] = useState();
  const [tokenDevice, setTokenDevice] = useState();

  const updateTitle = (value) => {
    setTitle(value);
  };

  const updateMessage = (value) => {
    setMessage(value);
  };

  const sendNotification = () => {
    console.log("title", title);
    const messageToSend = {
      to: tokenDevice,
      sound: "default",
      title: title,
      body: message,
      data: { someData: "goes here" },
    };
    console.log("messageToSend", messageToSend);
    sendPushNotification(messageToSend);
  };

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      // Llevar el token a la base de datos y
      // relacionarlo con el dispositivo del usuario
      setTokenDevice(token);
    });
  }, []);

  return (
    <View>
      <Text>PUSH NOTIFICATION</Text>
      <Text>Title:</Text>
      <TextInput style={input} onChangeText={updateTitle} value={title} />
      <Text>Message:</Text>
      <TextInput style={input} onChangeText={updateMessage} value={message} />
      <Button title="Send push notification" onPress={sendNotification} />
    </View>
  );
};

export default PushNotificationScreen;
