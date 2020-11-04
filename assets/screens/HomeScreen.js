import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderComponent from "../components/Header";
import HomeScreenIcon from "../components/HomeScreenIcon";
import { LinearGradient } from "expo-linear-gradient";

function HomeScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState("car");
  return (
    <Screen style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <View style={styles.viewContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.firstRow}>
            <HomeScreenIcon title="Car" icon="car" />
            <HomeScreenIcon title="Food" icon="silverware-fork-knife" />
            <HomeScreenIcon title="Entertaiment" icon="glass-cocktail" />
            <HomeScreenIcon title="Home" icon="home" />
          </View>
        </View>
        <View style={styles.tool}>
          <TouchableOpacity onPress={() => navigation.navigate("AddExpense")}>
            <MaterialCommunityIcons name="minus" size={40} color="#808285" />
          </TouchableOpacity>
          <LinearGradient
            style={styles.circleInfo}
            colors={["#20bf5a", "#01bbec"]}
            start={[1, 0]}
            end={[0, 1]}
          >
            <Text style={styles.cirleText}>567 lei</Text>
            <MaterialCommunityIcons
              name="car"
              color="white"
              size={50}
              style={{ marginTop: 10 }}
            ></MaterialCommunityIcons>
          </LinearGradient>
          <TouchableOpacity onPress={() => navigation.navigate("AddIncome")}>
            <MaterialCommunityIcons name="plus" size={40} color="#808285" />
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.firstRow}>
            <HomeScreenIcon title="Services" icon="bank" />
            <HomeScreenIcon title="Medicine" icon="medical-bag" />
            <HomeScreenIcon title="Sport" icon="spa" />
            <HomeScreenIcon title="Shopping" icon="cart" />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  viewContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  tool: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
  circleInfo: {
    width: 190,
    height: 190,
    borderRadius: 95,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 45,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 0.5 * 10 },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * 10,
  },
  cirleText: {
    color: "white",
    fontSize: 30,
  },
  rowContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 30,
  },
  firstRow: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default HomeScreen;
