import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./assets/screens/WelcomeScreen";
import HomeScreen from "./assets/screens/HomeScreen";
import ExpensesScreen from "./assets/screens/ExpensesScreen";
import IncomesScreen from "./assets/screens/IncomesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      tabStyle: {
        backgroundColor: "white",
      },
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen
      name="Expenses"
      component={ExpensesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Text style={{ color: color }}>Expenses</Text>
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Text style={{ color: color }}>Home</Text>
        ),
      }}
    />
    <Tab.Screen
      name="Incomes"
      component={IncomesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Text style={{ color: color }}>Incomes</Text>
        ),
      }}
    />
  </Tab.Navigator>
);
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
