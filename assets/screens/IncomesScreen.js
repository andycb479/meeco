import React from "react";
import { Text, View, StyleSheet } from "react-native";
import HeaderComponent from "../components/Header";
import SafeScreen from "../components/SafeScreen";

function IncomesScreen({ navigation }) {
  return (
    <SafeScreen>
      <HeaderComponent navigation={navigation} />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
});
export default IncomesScreen;
