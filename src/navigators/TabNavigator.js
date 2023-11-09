import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import ChatPage from "../../screens/ChatPage";
import React from "react";

import Icon from 'react-native-vector-icons/FontAwesome'; 
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home"
              size={size}
              color={focused ? "coral" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatPage}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="reddit-alien"
              size={size}
              color={focused ? "coral" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 50,
    position: "absolute",
    backgroundColor: "grey",
    borderTopWidth: 0,
    elevation: 0,
  },
  BlurViewStyle: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
export default TabNavigator;


