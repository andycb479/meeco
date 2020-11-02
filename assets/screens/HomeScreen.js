import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SafeScreen from "../components/SafeScreen";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import HeaderComponent from "../components/Header";

function HomeScreen({ navigation }) {
  return (
    <SafeScreen>
      <HeaderComponent navigation={navigation} />
      <View style={styles.tool}>
        <TouchableOpacity onPress={() => navigation.navigate("AddExpense")}>
          <MaterialCommunityIcons name="minus" size={40} color="black" />
        </TouchableOpacity>
        <View style={styles.circleInfo}></View>
        <TouchableOpacity onPress={() => navigation.navigate("AddIncome")}>
          <MaterialCommunityIcons name="plus" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  tool: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
  circleInfo: {
    width: 170,
    height: 170,
    backgroundColor: "green",
    borderRadius: 85,
  },
});
export default HomeScreen;
