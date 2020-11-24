import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AccountSettingsScreen from "../screens/AccountSettingsScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import AddIncomeScreen from "../screens/AddIncomeScreen";
import CurrencyScreen from "../screens/CurrencyScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import ExpensesScreen from "../screens/ExpensesScreen";
import IncomesScreen from "../screens/IncomesScreen";
import BottomTab from "../components/BottomTab";

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
const AppMain = createStackNavigator();
const AppNavigation = () => (
  <AppMain.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AppMain.Screen name="Welcome" component={WelcomeScreen} />
    <AppMain.Screen name="Main" component={TabNavigator} />
    <AppMain.Screen name="AccountSettings" component={AccountSettingsScreen} />
    <AppMain.Screen name="Currency" component={CurrencyScreen} />
    <AppMain.Screen name="AddExpense" component={AddExpenseScreen} />
    <AppMain.Screen name="AddIncome" component={AddIncomeScreen} />
  </AppMain.Navigator>
);
export default AppNavigation;
