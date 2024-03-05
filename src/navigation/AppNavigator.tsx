import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Home from "../screens/Home";
import About from "../screens/About";
import Cadastro from "../screens/Cadastro";

const AppStack = createStackNavigator();

function AppNavigator() {
  return (
    <AppStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="About" component={About} />
      <AppStack.Screen name="Cadastro" component={Cadastro} />
    </AppStack.Navigator>
  );
}

export default AppNavigator;
