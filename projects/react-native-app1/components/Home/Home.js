import react from "react";
import { View, Button, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Screens
import { CharactersScreen } from "../Characters";
import { ProfileScreen } from "../Profile";
import { PushNotificationScreen } from "../PushNotificationScreen";

// Route names
const characterName = "characters";
const profileName = "profile";
const pushNoti = "pushNotification";

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === characterName) {
            iconName = focused ? "view-list" : "view-list-outline";
          } else if (rn === profileName) {
            iconName = focused
              ? "account-arrow-left"
              : "account-arrow-left-outline";
          } else {
            iconName = "view-list";
          }

          return (
            <MaterialCommunityIcons name={iconName} color={color} size={size} />
          );
        },
        tabBarActiveTintColor: "red",
        tabBarInactivectiveTintColor: "blue",
        tabBarlabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { paddingBottom: 10 },
      })}
    >
      <Tab.Screen
        name={characterName}
        component={CharactersScreen}
        options={{
          tabBarLabel: "Characters",
        }}
      />
      <Tab.Screen
        name={profileName}
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
        }}
      />
      <Tab.Screen
        name={pushNoti}
        component={PushNotificationScreen}
        options={{
          tabBarLabel: "Push Notifications",
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
