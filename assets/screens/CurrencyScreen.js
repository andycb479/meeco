import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";
import currency from "../api/currency";
import BackStackNavigation from "../components/BackStackNavigation";
import Screen from "../components/Screen";
import SettingsList from "../components/SettingsList";
import useApi from "../hooks/useApi";
import PDFGenerator from "../utility/PDFGenerator";

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
        iconName: "euro-sign",
        settingTitle: "EUR",
        settingValue: currencyData[0].EUR + " lei",
      },
      {
        id: 2,
        settingTitle: "USD",
        settingValue: currencyData[0].USD + " lei",
        iconName: "dollar-sign",
      },
      {
        id: 3,
        settingTitle: "RUB",
        settingValue: currencyData[0].RUB + " lei",
        iconName: "ruble-sign",
      },
      {
        id: 5,
        settingTitle: "GBP",
        settingValue: currencyData[0].GBP + " lei",
        iconName: "pound-sign",
      },
      {
        id: 6,
        settingTitle: "CAD",
        settingValue: currencyData[0].CAD + " lei",
        iconName: "canadian-maple-leaf",
      },
      {
        id: 7,
        settingTitle: "TRY",
        settingValue: currencyData[0].TUR + " lei",
        iconName: "lira-sign",
      },
    ];
  }
  return (
    <Screen>
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
