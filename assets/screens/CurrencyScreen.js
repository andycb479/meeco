import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import currency from "../api/currency";
import BackStackNavigation from "../components/BackStackNavigation";
import Screen from "../components/Screen";
import SettingsList from "../components/SettingsList";
import useApi from "../hooks/useApi";

function CurrencyScreen({ navigation }) {
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setCurrentDate(date + "/" + month + "/" + year);
  }, []);
  const { data: currencyData, error, loading, request } = useApi(
    currency.getCurrency
  );
  useEffect(() => {
    request();
  }, []);
  if (currencyData.length != 0) {
    var data = [
      {
        id: 1,
        settingTitle: "EUR",
        settingValue: currencyData[0].EUR + " lei",
        color: "#824586",
        flag: "EU",
      },
      {
        id: 2,
        settingTitle: "USD",
        settingValue: currencyData[0].USD + " lei",
        color: "#186F4D",
        flag: "US",
      },
      {
        id: 3,
        settingTitle: "RUB",
        settingValue: currencyData[0].RUB + " lei",
        color: "#1979a9",
        flag: "RU",
      },
      {
        id: 5,
        settingTitle: "GBP",
        settingValue: currencyData[0].GBP + " lei",
        color: "tomato",
        flag: "GB",
      },
      {
        id: 6,
        settingTitle: "CAD",
        settingValue: currencyData[0].CAD + " lei",
        color: "#C41239",
        flag: "CA",
      },
      {
        id: 7,
        settingTitle: "TRY",
        settingValue: currencyData[0].TRY + " lei",
        flag: "TR",
      },
      {
        id: 9,
        settingTitle: "RON",
        settingValue: currencyData[0].RON + " lei",
        flag: "RO",
      },
      {
        id: 10,
        settingTitle: "UAH",
        settingValue: currencyData[0].UAH + " lei",
        flag: "UA",
      },
      {
        id: 11,
        settingTitle: "CHF",
        settingValue: currencyData[0].CHF + " lei",
        flag: "CH",
      },
      {
        id: 12,
        settingTitle: "HUF",
        settingValue: currencyData[0].HUF + " lei",
        flag: "HU",
      },
      {
        id: 13,
        settingTitle: "BGN",
        settingValue: currencyData[0].BGN + " lei",
        flag: "BG",
      },
    ];
  }
  return (
    <Screen style={{ flex: 1 }}>
      <View style={styles.topBar}>
        <BackStackNavigation style={{ flex: 1 }} navigation={navigation} />
        <Text style={styles.text}>{"\t"}Currency</Text>
      </View>
      {currencyData.length != 0 ? (
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
      ) : (
        <ActivityIndicator animating={loading} size={30} color="green" />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    height: "90%",
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
