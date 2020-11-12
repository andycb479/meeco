import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function BackStackNavigation({ navigation, style = null }) {
  return (
    <View style={style}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="chevron-left" size={38} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {},
});
export default BackStackNavigation;
