import React from "react";
import { View, StyleSheet, Button, Modal } from "react-native";
import ChartComponenent from "../components/ChartComponenent";
import HeaderComponent from "../components/Header";
import Screen from "../components/Screen";
import ExpensesList from "../components/ExpensesList";

const data = [
  {
    id: 1,
    iconName: "home",
    category: "Food",
    title: "McDonalds",
    date: "17 September 14:02",
    amount: "657 lei",
    description: "Description",
  },
  {
    id: 2,
    iconName: "spa",
    category: "Sport",
    title: "New gym T-Shirt",
    date: "20 September 14:02",
    amount: "1000 lei",
    description:
      "Iaca eu miam cumparat o maica de la Nike si asa is de bucuros vashe nu mai pot",
  },
  {
    id: 3,
    iconName: "car",
    category: "Food",
    title: "McDonalds",
    date: "17 September 14:02",
    amount: "657 lei",
  },
  {
    id: 4,
    iconName: "home",
    category: "Food",
    title: "McDonalds",
    date: "17 September 14:02",
    amount: "657 lei",
  },
  {
    id: 5,
    iconName: "home",
    category: "Food",
    title: "McDonalds",
    date: "17 September 14:02",
    amount: "657 lei",
  },
  {
    id: 6,
    iconName: "home",
    category: "Food",
    title: "McDonalds",
    date: "17 September 14:02",
    amount: "657 lei",
  },
  {
    id: 7,
    iconName: "home",
    category: "Food",
    title: "McDonalds",
    date: "17 September 14:02",
    amount: "657 lei",
  },
];

function ExpensesScreen({ navigation }) {
  return (
    <Screen>
      <HeaderComponent navigation={navigation} />
      <View style={styles.container}>
        <ChartComponenent from="#FDF8AD" to="#F987D0" />
        <ExpensesList data={data} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ExpensesScreen;
