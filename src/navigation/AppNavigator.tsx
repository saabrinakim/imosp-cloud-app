import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Home from "../screens/Home";
import About from "../screens/About";
import Cadastro from "../screens/Cadastro";
import Login from "../screens/Login";
import Onboarding from "../screens/Onboarding";
import Ministries from "../screens/Ministries";
import Events from "../screens/Events";
import Service from "../screens/Service";

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
      <AppStack.Screen name="Ministries" component={Ministries} />
      <AppStack.Screen name="Events" component={Events} />
      <AppStack.Screen name="Service" component={Service} />
    </AppStack.Navigator>
  );
}

export default AppNavigator;
