import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function BackStackNavigation({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <MaterialCommunityIcons
        style={styles.icon}
        name="chevron-left"
        size={38}
        color="black"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 15,
  },
});
export default BackStackNavigation;
