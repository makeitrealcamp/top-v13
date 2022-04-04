import React from "react";
import { View, Image, Text } from "react-native";

import { styles } from "./style";

const { cardCharacter, imageItem, textItem } = styles;

const Card = ({ item }) => {
  return (
    <View style={cardCharacter}>
      <Image style={imageItem} source={{ uri: item.image }} />
      <Text style={textItem}> {item.name}</Text>
    </View>
  );
};

export default Card;
