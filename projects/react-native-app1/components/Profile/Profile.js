import react from "react";
import { View, Text, Image, TextInput } from "react-native";

import { InputField } from "../Input";

import { styles } from "./style";

const { profileImage, profileForm, input } = styles;

const Profile = () => {
  return (
    <View>
      <View>
        <Image
          style={profileImage}
          source={{
            uri: "https://picsum.photos/200/200",
          }}
        />
      </View>
      <View style={profileForm}>
        <InputField label="NAME:" />
        <InputField label="LASTNAME:" />
      </View>
    </View>
  );
};

export default Profile;
