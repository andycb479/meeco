import React, { useState } from "react";
import { View, Button, StyleSheet, Modal } from "react-native";
import HeaderComponent from "../components/Header";
import Screen from "../components/Screen";
import ChartComponenent from "../components/ChartComponenent";
import IncomesList from "../components/IncomesList";

const data = [
  {
    id: 1,
    title: "Bursa",
    date: "17 September 14:02",
    amount: "1000 lei",
  },
  {
    id: 2,
    title: "Cadou de la bunelu",
    date: "17 September 14:02",
    amount: "20000 lei",
  },
  {
    id: 3,
    title: "McDonalds",
    date: "17 September 14:02",
    amount: "657 lei",
  },
  {
    id: 4,
    title: "Bursa",
    date: "17 September 14:02",
    amount: "1000 lei",
  },
  {
    id: 5,
    title: "Cadou de la bunelu",
    date: "17 September 14:02",
    amount: "20000 lei",
  },
  {
    id: 6,
    title: "Bursa",
    date: "17 September 14:02",
    amount: "1000 lei",
  },
  {
    id: 7,
    title: "Bursa",
    date: "17 September 14:02",
    amount: "1000 lei",
  },
  {
    id: 8,
    title: "Bursa",
    date: "17 September 14:02",
    amount: "1000 lei",
  },
];

function IncomesScreen({ navigation }) {
  return (
    <Screen>
      <HeaderComponent navigation={navigation} />
      <View style={styles.container}>
        <ChartComponenent from="#9FEDFF" to="#42e879" />
        <IncomesList data={data} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default IncomesScreen;
