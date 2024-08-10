import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

import Home from "../screens/Home";
import About from "../screens/About";
import Cadastro from "../screens/Cadastro";
import Login from "../screens/Login";
import Onboarding from "../screens/Onboarding";
import Ministries from "../screens/Ministries";
import Events from "../screens/Events";
import Service from "../screens/Service";

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#2C2C2C",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={Events}
        options={{
          tabBarLabel: "Agenda",
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Ministérios"
        component={Ministries}
        options={{
          tabBarLabel: "Ministérios",
          tabBarIcon: ({ color }) => (
            <Feather name="users" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={About}
        options={{
          tabBarLabel: "Sobre",
          tabBarIcon: ({ color }) => (
            <Feather name="bookmark" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <AppStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="Home" component={HomeTabs} />
      <AppStack.Screen name="Onboarding" component={Onboarding} />
      <AppStack.Screen name="Cadastro" component={Cadastro} />
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="Service" component={Service} />
    </AppStack.Navigator>
  );
}

export default AppNavigator;
