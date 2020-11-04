import React from "react";
import { StyleSheet } from "react-native";
import HeaderComponent from "../components/Header";
import Screen from "../components/Screen";

function IncomesScreen({ navigation }) {
  return (
    <Screen>
      <HeaderComponent navigation={navigation} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
});
export default IncomesScreen;
