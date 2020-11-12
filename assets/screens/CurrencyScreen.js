import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import BackStackNavigation from "../components/BackStackNavigation";
import Screen from "../components/Screen";
import SettingsList from "../components/SettingsList";

const data = [
  {
    id: 1,
    iconName: "euro-sign",
    settingTitle: "EUR",
    settingValue: "20,1614 lei",
  },
  {
    id: 2,
    settingTitle: "USD",
    settingValue: "17,1332 lei",
    iconName: "dollar-sign",
  },
  {
    id: 3,
    settingTitle: "RUB",
    settingValue: "0,2247 lei",
    iconName: "ruble-sign",
  },
  {
    id: 5,
    settingTitle: "GBP",
    settingValue: "0,6080 lei",
    iconName: "pound-sign",
  },
  {
    id: 6,
    settingTitle: "CAD",
    settingValue: "13,1349 lei",
    iconName: "canadian-maple-leaf",
  },
  {
    id: 7,
    settingTitle: "TRY",
    settingValue: "2,1590 lei",
    iconName: "lira-sign",
  },
];

function CurrencyScreen({ navigation }) {
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setCurrentDate(date + "/" + month + "/" + year);
  }, []);
  return (
    <Screen>
      <View style={styles.topBar}>
        <BackStackNavigation style={{ flex: 1 }} navigation={navigation} />
        <Text style={styles.text}>{"\t"}Currency</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.dateTextContainer}>
          <MaterialCommunityIcons
            name="calendar-today"
            size={22}
            color="black"
          />
          <Text style={styles.dateText}>{currentDate}</Text>
        </View>
        <SettingsList data={data} separator />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  topBar: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  text: {
    flex: 2,
    fontSize: 24,
    alignSelf: "center",
  },
  dateTextContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
  },
  dateText: {
    fontSize: 18,
    marginLeft: 3,
    marginBottom: 5,
  },
});
export default CurrencyScreen;
