import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./assets/screens/WelcomeScreen";
import HomeScreen from "./assets/screens/HomeScreen";
import ExpensesScreen from "./assets/screens/ExpensesScreen";
import IncomesScreen from "./assets/screens/IncomesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { View, Button } from "react-native";
import BottomTab from "./assets/components/BottomTab";
import AccountSettingsScreen from "./assets/screens/AccountSettingsScreen";
import AddExpenseScreen from "./assets/screens/AddExpenseScreen";
import AddIncomeScreen from "./assets/screens/AddIncomeScreen";
import CurrencyScreen from "./assets/screens/CurrencyScreen";

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      showLabel: false,
      tabStyle: {
        backgroundColor: "white",
      },
      activeTintColor: "black",
      inactiveTintColor: "white",
      activeBackgroundColor: "black",
    }}
  >
    <Tab.Screen
      name="Expenses"
      component={ExpensesScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <BottomTab focused={focused} color={color}>
            Expenses
          </BottomTab>
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <BottomTab focused={focused} color={color}>
            Home
          </BottomTab>
        ),
      }}
    />
    <Tab.Screen
      name="Incomes"
      component={IncomesScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <BottomTab focused={focused} color={color}>
            Incomes
          </BottomTab>
        ),
      }}
    />
  </Tab.Navigator>
);
const Stack = createStackNavigator();
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
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
        <Stack.Screen
          name="AccountSettings"
          component={AccountSettingsScreen}
        />
        <Stack.Screen name="Currency" component={CurrencyScreen} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
        <Stack.Screen name="AddIncome" component={AddIncomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
