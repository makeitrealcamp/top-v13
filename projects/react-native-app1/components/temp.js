import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

const App = () => {
  const [image, setImage] = useState();

  const handleClick = async () => {
    const permisions = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permisions.granted) {
      Alert.alert("Permissions to access camera is required.");
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    const { uri } = pickerResult;
    setImage({ localImage: uri });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!!!</Text>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.textButton}>Click me</Text>
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{
          uri: image ? image.localImage : "https://picsum.photos/200/200",
        }}
      />
    </View>
  );
};
