import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

function SafeScreen({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: { marginTop: Constants.statusBarHeight, flex: 1 },
});
export default SafeScreen;
