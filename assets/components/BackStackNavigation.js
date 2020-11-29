import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function BackStackNavigation({ navigation, style = null }) {
  const [active, setActive] = useState(false);
  return (
    <View style={style}>
      <TouchableOpacity
        disabled={active}
        style={styles.icon}
        onPress={() => {
          setActive(true);
          navigation.goBack();
        }}
      >
        <MaterialCommunityIcons name="chevron-left" size={38} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {},
});
export default BackStackNavigation;
