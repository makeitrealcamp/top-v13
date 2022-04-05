import React, { useEffect } from "react";
import { View, Text } from "react-native";
import {
  registerForPushNotificationsAsync,
  sendPushNotification,
} from "../../services/pushNotificationService";

const PushNotificationScreen = () => {
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      // Llevar el token a la base de datos y
      // relacionarlo con el dispositivo del usuario
      console.log("**************", token);

      const message = {
        to: token,
        sound: "default",
        title: "Original Title",
        body: "And here is the body!",
        data: { someData: "goes here" },
      };

      sendPushNotification(message);
    });
  }, []);

  return (
    <View>
      <Text>Notification...</Text>
    </View>
  );
};

export default PushNotificationScreen;
