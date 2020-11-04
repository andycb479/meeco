import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function HeaderComponent({ navigation }) {
  return (
    <View style={styles.header}>
      <MaterialIcons
        style={styles.icon}
        name="menu"
        size={38}
        color="#231f20"
      />
      <Image style={styles.logo} source={require("../src/logo.png")} />
      <TouchableOpacity onPress={() => navigation.navigate("AccountSettings")}>
        <MaterialIcons
          style={styles.icon}
          name="account-circle"
          size={38}
          color="#231f20"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 15,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  icon: {},
  logo: {
    width: 120,
    height: 45,
  },
});
export default HeaderComponent;
