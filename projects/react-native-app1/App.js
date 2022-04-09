import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Layout } from "./components/Layout";
import { HomeScreen } from "./components/Home";
import { LoginScreen } from "./components/Login";
import useAuth from "./hooks/useAuth";

const Stack = createNativeStackNavigator();

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Login" }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
