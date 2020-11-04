import React from "react";
import { Text, View, StyleSheet } from "react-native";
import HeaderComponent from "../components/Header";
import Screen from "../components/Screen";

function ExpensesScreen({ navigation }) {
  return (
    <Screen>
      <HeaderComponent navigation={navigation} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
});
export default ExpensesScreen;
