import React from "react";
import { Text, View, StyleSheet } from "react-native";

function BottomTab({ children, color, focused }) {
  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: 20,
        width: 100,
        height: 27,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {focused ? (
        <Text style={{ color: "white" }}>{children}</Text>
      ) : (
        <Text style={{ color: "black" }}>{children}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderRadius: 20 },
});
export default BottomTab;
