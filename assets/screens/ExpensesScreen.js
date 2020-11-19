import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import ChartComponenent from "../components/ChartComponenent";
import HeaderComponent from "../components/Header";
import Screen from "../components/Screen";
import ExpensesList from "../components/ExpensesList";
import useApi from "../hooks/useApi";
import expensesDiagram from "../api/expensesDiagram";
import expenses from "../api/expenses";

const wait = (timeout, listRequest, chartRequest) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
    listRequest();
    chartRequest();
  });
};

function ExpensesScreen({ navigation }) {
  const { data: chartData, error, loading, request: getSums } = useApi(
    expensesDiagram.getSumsPerMonth
  );
  const allExpenses = useApi(expenses.getExpenses);
  useEffect(() => {
    getSums();
    allExpenses.request();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000, allExpenses.request, getSums).then(() => setRefreshing(false));
  }, []);

  return (
    <Screen>
      <HeaderComponent navigation={navigation} />
      {!chartData.data && allExpenses.data ? (
        <ActivityIndicator animating={loading} size={30} color="red" />
      ) : (
        <View style={styles.container}>
          <ChartComponenent data={chartData} from="#FDF8AD" to="#F987D0" />
          <ExpensesList
            onRefreshHandler={onRefresh}
            refreshingState={refreshing}
            data={allExpenses.data}
          />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
export default ExpensesScreen;
