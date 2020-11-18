import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderComponent from "../components/Header";
import HomeScreenIcon from "../components/HomeScreenIcon";
import { LinearGradient } from "expo-linear-gradient";
import useApi from "../hooks/useApi";
import eachCategorySum from "../api/eachCategorySum";

function HomeScreen({ navigation }) {
  const { data, loading, error, request: getSum } = useApi(
    eachCategorySum.getSums
  );
  useEffect(() => {
    getSum();
  }, []);
  const handler = (active) => {
    setActiveIndex(active);
    setActiveAmount(data[active.title]);
  };
  const [activeIndex, setActiveIndex] = useState({ title: "Car", icon: "car" });
  const [activeAmount, setActiveAmount] = useState();
  return (
    <Screen style={styles.container}>
      <HeaderComponent navigation={navigation} />
      {data.length != 0 ? (
        <View style={styles.viewContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.firstRow}>
              <HomeScreenIcon
                active={activeIndex.title}
                title="Car"
                icon="car"
                onPress={handler}
              />
              <HomeScreenIcon
                active={activeIndex.title}
                title="Food"
                icon="silverware-fork-knife"
                onPress={handler}
              />
              <HomeScreenIcon
                active={activeIndex.title}
                title="Entertaiment"
                icon="glass-cocktail"
                onPress={handler}
              />
              <HomeScreenIcon
                active={activeIndex.title}
                title="Home"
                icon="home"
                onPress={handler}
              />
            </View>
          </View>
          <View style={styles.tool}>
            <TouchableOpacity onPress={() => navigation.navigate("AddExpense")}>
              <MaterialCommunityIcons name="minus" size={40} color="#ec008c" />
            </TouchableOpacity>
            <LinearGradient
              style={styles.circleInfo}
              colors={["#20bf5a", "#01bbec"]}
              start={[1, 0]}
              end={[0, 1]}
            >
              <Text style={styles.cirleText}>
                {typeof activeAmount === "undefined" ? data.Car : null}
                {activeAmount} lei
              </Text>
              <MaterialCommunityIcons
                name={activeIndex.icon}
                color="white"
                size={50}
                style={{ marginTop: 10 }}
              ></MaterialCommunityIcons>
            </LinearGradient>
            <TouchableOpacity onPress={() => navigation.navigate("AddIncome")}>
              <MaterialCommunityIcons name="plus" size={40} color="#20bf5a" />
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.firstRow}>
              <HomeScreenIcon
                active={activeIndex.title}
                title="Services"
                icon="bank"
                onPress={handler}
              />
              <HomeScreenIcon
                active={activeIndex.title}
                title="Medicine"
                icon="medical-bag"
                onPress={handler}
              />
              <HomeScreenIcon
                active={activeIndex.title}
                title="Sport"
                icon="spa"
                onPress={handler}
              />
              <HomeScreenIcon
                active={activeIndex.title}
                title="Shopping"
                icon="cart"
                onPress={handler}
              />
            </View>
          </View>
        </View>
      ) : (
        <ActivityIndicator animating={loading} size={30} color="green" />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
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
    width: 210,
    height: 210,
    borderRadius: 105,
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
    fontSize: 33,
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
