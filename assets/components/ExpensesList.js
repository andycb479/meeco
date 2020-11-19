import React from "react";
import { FlatList, StyleSheet, RefreshControl } from "react-native";
import LineItemExpenses from "./LineItemExpenses";

function ExpensesList({ onRefreshHandler, refreshingState, data }) {
  return (
    <FlatList
      contentContainerStyle={styles.scroll}
      refreshControl={
        <RefreshControl
          refreshing={refreshingState}
          onRefresh={onRefreshHandler}
        />
      }
      data={data}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <LineItemExpenses
          iconName={item.iconName}
          date={new Date(item.date).toString().substring(4, 21)}
          title={item.name}
          amount={item.value + " lei"}
          category={item.category}
          description={item.description}
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
export default ExpensesList;