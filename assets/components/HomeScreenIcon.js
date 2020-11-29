import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function HomeScreenIcon({ active, title, icon, onPress }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onPress({ title, icon });
      }}
    >
      {active == title ? (
        <View style={styles.container}>
          <View style={[styles.iconBox, styles.active]}>
            <MaterialCommunityIcons color={"white"} size={30} name={icon} />
          </View>
          <Text style={[styles.title, styles.activeText]}>{title}</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={[styles.iconBox, styles.notActive]}>
            <MaterialCommunityIcons color={"#939598"} size={30} name={icon} />
          </View>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>
      )}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: "#231f20",
    color: "#231f20",
  },
  activeText: {
    fontWeight: "bold",
  },
  notActive: {
    borderColor: "#939598",
    borderWidth: 2,
  },
  container: {
    width: 97,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#939598",
    fontSize: 15,
  },
});
export default HomeScreenIcon;
