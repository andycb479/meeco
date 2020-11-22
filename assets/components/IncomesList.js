import React, { useRef } from "react";
import { FlatList, StyleSheet, RefreshControl } from "react-native";
import LineItemExpenses from "./LineItemExpenses";

function IncomesList({ onRefreshHandler, refreshingState, data }) {
  return (
    <FlatList
      contentContainerStyle={styles.scroll}
      data={data}
      refreshControl={
        <RefreshControl
          refreshing={refreshingState}
          onRefresh={onRefreshHandler}
        />
      }
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <LineItemExpenses
          onchange={onRefreshHandler}
          index={item._id}
          iconName={"currency-usd"}
          date={new Date(item.date).toString().substring(4, 21)}
          title={item.name}
          description={item.description}
          amount={item.value + " lei"}
          incomes
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  scroll: {
    marginHorizontal: 20,
  },
});
export default IncomesList;
