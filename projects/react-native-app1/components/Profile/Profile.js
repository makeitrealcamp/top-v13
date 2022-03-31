import react, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";

import { InputField } from "../Input";
import { ProfileImage } from "./ProfileImage";

import { styles } from "./style";

const { profileForm, profileScreen, profileImage, profileTitle, title } =
  styles;

const Profile = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    lastname: "",
  });

  const handleChangeInput = (tag, value) => {
    setForm((state) => ({ ...state, [tag]: value }));
  };

  const saveProfile = () => {
    const { email, name, lastname } = form;
    Alert.alert(`
    su perfil es: ${name} ${lastname} <${email}>
    `);
    // go to endpoint

    console.log("FORM", form);
  };

  return (
    <View style={profileScreen}>
      <View style={profileImage}>
        <ProfileImage sourceImg="https://picsum.photos/200/200" />
      </View>

      <View style={profileTitle}>
        <Text style={title}>YOUR PROFILE</Text>
      </View>
      <View style={profileForm}>
        <InputField
          name="email"
          label="EMAIL:"
          value={form.email}
          handleChange={handleChangeInput}
        />
        <InputField
          name="name"
          label="NAME:"
          value={form.name}
          handleChange={handleChangeInput}
        />
        <InputField
          name="lastname"
          label="LASTNAME:"
          value={form.lastname}
          handleChange={handleChangeInput}
        />
      </View>

      <Button title="save" onPress={saveProfile} />
    </View>
  );
};

export default Profile;
