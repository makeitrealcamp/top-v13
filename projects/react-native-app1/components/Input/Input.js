import React from "react";
import { View, TextInput, Text } from "react-native";

import { styles } from "./style";

const { input, inputContainer } = styles;

const Input = ({ name, label, value, handleChange }) => {
  const handleChangeText = (value) => {
    handleChange(name, value);
  };

  return (
    <View style={inputContainer}>
      <Text>{label}</Text>
      <TextInput style={input} value={value} onChangeText={handleChangeText} />
    </View>
  );
};

export default Input;
