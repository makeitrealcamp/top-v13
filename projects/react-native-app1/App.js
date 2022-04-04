import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Layout } from "./components/Layout";
import { HomeScreen } from "./components/Home";
import { ProfileScreen } from "./components/Profile";
import { CharactersScreen } from "./components/Characters";

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Your profile" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
