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

    console.log("pickerResult", pickerResult);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
  button: {
    width: 150,
    padding: 10,
    backgroundColor: "#2196F3",
    color: "#fff",
    textAlign: "center",
    borderRadius: 10,
  },
  textButton: {
    color: "blue",
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default App;
