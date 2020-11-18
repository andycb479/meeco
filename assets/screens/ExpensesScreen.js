import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Modal,
  ActivityIndicator,
  Text,
} from "react-native";
import ChartComponenent from "../components/ChartComponenent";
import HeaderComponent from "../components/Header";
import Screen from "../components/Screen";
import ExpensesList from "../components/ExpensesList";
import useApi from "../hooks/useApi";
import expensesDiagram from "../api/expensesDiagram";
import expenses from "../api/expenses";

// const listData = [
//   {
//     id: 1,
//     iconName: "home",
//     category: "Food",
//     title: "McDonalds",
//     date: "17 September 14:02",
//     amount: "657 lei",
//     description: "Description",
//   },
//   {
//     id: 2,
//     iconName: "spa",
//     category: "Sport",
//     title: "New gym T-Shirt",
//     date: "20 September 14:02",
//     amount: "1000 lei",
//     description:
//       "Iaca eu miam cumparat o maica de la Nike si asa is de bucuros vashe nu mai pot",
//   },
//   {
//     id: 3,
//     iconName: "car",
//     category: "Food",
//     title: "McDonalds",
//     date: "17 September 14:02",
//     amount: "657 lei",
//   },
//   {
//     id: 4,
//     iconName: "home",
//     category: "Food",
//     title: "McDonalds",
//     date: "17 September 14:02",
//     amount: "657 lei",
//   },
//   {
//     id: 5,
//     iconName: "home",
//     category: "Food",
//     title: "McDonalds",
//     date: "17 September 14:02",
//     amount: "657 lei",
//   },
//   {
//     id: 6,
//     iconName: "home",
//     category: "Food",
//     title: "McDonalds",
//     date: "17 September 14:02",
//     amount: "657 lei",
//   },
//   {
//     id: 7,
//     iconName: "home",
//     category: "Food",
//     title: "McDonalds",
//     date: "17 September 14:02",
//     amount: "657 lei",
//   },
// ];

function ExpensesScreen({ navigation }) {
  const { data: chartData, error, loading, request: getSums } = useApi(
    expensesDiagram.getSumsPerMonth
  );
  const allExpenses = useApi(expenses.getExpenses);
  useEffect(() => {
    getSums();
    allExpenses.request();
  }, []);

  return (
    <Screen>
      <HeaderComponent navigation={navigation} />
      {!chartData.data && allExpenses.data ? (
        <ActivityIndicator animating={loading} size={30} color="green" />
      ) : (
        <View style={styles.container}>
          <ChartComponenent data={chartData} from="#FDF8AD" to="#F987D0" />
          <ExpensesList data={allExpenses.data} />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ExpensesScreen;
