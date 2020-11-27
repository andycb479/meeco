import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableHighlight,
} from "react-native";
import ChartComponenent from "../components/ChartComponenent";
import HeaderComponent from "../components/Header";
import Screen from "../components/Screen";
import ExpensesList from "../components/ExpensesList";
import useApi from "../hooks/useApi";
import expensesDiagram from "../api/expensesDiagram";
import expenses from "../api/expenses";
import ExportPDFButton from "../components/ExportPDFButton";
import RefreshContext from "../utility/RefreshContext";

function ExpensesScreen({ navigation }) {
  const { data: chartData, error, loading, request: getSums } = useApi(
    expensesDiagram.getSumsPerMonth
  );
  const allExpenses = useApi(expenses.getExpenses);
  useEffect(() => {
    getSums();
    allExpenses.request();
  }, []);

  const onRefresh = React.useCallback(() => {
    allExpenses.request();
    getSums();
  }, []);

  return (
    <RefreshContext.Provider value={{ onRefresh }}>
      <Screen>
        <HeaderComponent navigation={navigation} />
        {!chartData.data && allExpenses.data ? (
          <ActivityIndicator
            animating={allExpenses.loading && loading}
            size={30}
            color="red"
          />
        ) : (
          <View style={styles.container}>
            <ChartComponenent data={chartData} from="#FDF8AD" to="#F987D0" />
            <ExportPDFButton data={allExpenses.data} />
            <ExpensesList
              onRefreshHandler={onRefresh}
              refreshingState={allExpenses.loading}
              data={allExpenses.data}
            />
          </View>
        )}
      </Screen>
    </RefreshContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default ExpensesScreen;
