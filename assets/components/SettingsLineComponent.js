import React from "react";
import { View, Text, StyleSheet } from "react-native";

function SettingLineComponent({ settingTitle, settingValue }) {
  return (
    <View style={styles.line}>
      <Text>{settingTitle}</Text>
      <Text>{settingValue}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
});

export default SettingLineComponent;
