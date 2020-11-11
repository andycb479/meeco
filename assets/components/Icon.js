import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({ name, size = 40, backgroundColor = "#000" }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 15,
        borderColor: backgroundColor,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        color={backgroundColor}
        size={size * 0.5}
      />
    </View>
  );
}

export default Icon;
