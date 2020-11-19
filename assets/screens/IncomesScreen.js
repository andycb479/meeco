import React, { useEffect, useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  Modal,
  ActivityIndicator,
} from "react-native";
import HeaderComponent from "../components/Header";
import Screen from "../components/Screen";
import ChartComponenent from "../components/ChartComponenent";
import IncomesList from "../components/IncomesList";
import useApi from "../hooks/useApi";
import incomesDiagram from "../api/incomesDiagram";
import incomes from "../api/incomes";

const wait = (timeout, listRequest, chartRequest) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
    listRequest();
    chartRequest();
  });
};

function IncomesScreen({ navigation }) {
  const { data: chartData, error, loading, request: getSums } = useApi(
    incomesDiagram.getSumsPerMonth
  );
  const allIncomes = useApi(incomes.getIncomes);
  useEffect(() => {
    allIncomes.request();
    getSums();
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000, allIncomes.request, getSums).then(() => setRefreshing(false));
  }, []);

  return (
    <Screen>
      <HeaderComponent navigation={navigation} />
      {!chartData.data && allIncomes.data ? (
        <ActivityIndicator animating={loading} size={30} color="green" />
      ) : (
        <View style={styles.container}>
          <ChartComponenent data={chartData} from="#9FEDFF" to="#42e879" />
          <IncomesList
            onRefreshHandler={onRefresh}
            refreshingState={refreshing}
            data={allIncomes.data}
          />
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
export default IncomesScreen;
