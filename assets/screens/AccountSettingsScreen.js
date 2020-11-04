import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import BackStackNavigation from "../components/BackStackNavigation";

function AccountSettingsScreen({ navigation }) {
  return (
    <Screen>
      <BackStackNavigation navigation={navigation} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
});
export default AccountSettingsScreen;
