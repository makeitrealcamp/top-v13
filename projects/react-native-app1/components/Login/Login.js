import React, { useState } from "react";
import { View, Text, Button } from "react-native";

import useAuth from "../../hooks/useAuth";

import { InputField } from "../Input";
import { loginAsync } from "../api/user";

const Login = ({ navigation }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { storeData } = useAuth();

  const handleChangeInput = (tag, value) => {
    setForm((state) => ({ ...state, [tag]: value }));
  };

  const login = async () => {
    const isAuthenticated = await loginAsync(form);
    storeData(isAuthenticated);

    console.log("navigation", navigation);
    //isAuthenticated && navigation.naavigate("Home");
  };

  return (
    <View>
      <Text>LOGIN</Text>
      <InputField
        name="username"
        label="USERNAME:"
        value={form.username}
        handleChange={handleChangeInput}
      />
      <InputField
        name="password"
        label="PASSWORD:"
        value={form.password}
        handleChange={handleChangeInput}
      />
      <Button title="login" onPress={login} />
    </View>
  );
};

export default Login;
