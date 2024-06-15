import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Home from "../screens/Home";
import About from "../screens/About";
import Cadastro from "../screens/Cadastro";
import Login from "../screens/Login";
import Onboarding from "../screens/Onboarding";

const AppStack = createStackNavigator();

function AppNavigator() {
  return (
    <AppStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="Onboarding" component={Onboarding} />
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="About" component={About} />
      <AppStack.Screen name="Cadastro" component={Cadastro} />
      <AppStack.Screen name="Login" component={Login} />
    </AppStack.Navigator>
  );
}

export default AppNavigator;
