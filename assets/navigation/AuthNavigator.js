import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeLoginScreen from "../screens/WelcomeLoginScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="WelcomeLogin">
    <Stack.Screen
      name="WelcomeLogin"
      component={WelcomeLoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
