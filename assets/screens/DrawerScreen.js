import React from "react";
import { Text, View, StyleSheet } from "react-native";

function DrawerScreen(props) {
  return (
    <View style={styles.container}>
      <Text>DrawerScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
});
export default DrawerScreen;
