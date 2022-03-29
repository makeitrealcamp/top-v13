import React from "react";
import { View, TextInput, Text } from "react-native";

import { styles } from "./style";

const Input = ({ label }) => (
  <View>
    <Text>{label}</Text>
    <TextInput style={styles.input} />
  </View>
);

export default Input;
