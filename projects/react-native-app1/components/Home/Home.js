import react from "react";
import { View, Button, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CharactersScreen } from "../Characters";
import { ProfileScreen } from "../Profile";

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Characters" component={CharactersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Home;
