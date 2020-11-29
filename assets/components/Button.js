import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";

function AppButton({ disabled, from, to, title, onPress }) {
  return (
    <LinearGradient
      style={styles.button}
      colors={[from, to]}
      start={[1, 0]}
      end={[0, 1]}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          width: "100%",
          borderRadius: 25,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 58,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
