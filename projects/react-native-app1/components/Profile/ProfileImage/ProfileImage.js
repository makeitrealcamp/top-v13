import React from "react";
import { View, Image } from "react-native";

import { styles } from "./style";

const { profileImageContainer, profileImage } = styles;

const ProfileImage = ({ sourceImg }) => (
  <View style={profileImageContainer}>
    <Image
      style={profileImage}
      source={{
        uri: sourceImg,
      }}
    />
  </View>
);

export default ProfileImage;
