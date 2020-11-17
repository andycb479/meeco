import React, { useRef } from "react";
import { FlatList, StyleSheet } from "react-native";
import LineItemExpenses from "./LineItemExpenses";

function ExpensesList({ data }) {
  return (
    <FlatList
      contentContainerStyle={styles.scroll}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <LineItemExpenses
          iconName={item.iconName}
          date={item.date}
          title={item.title}
          amount={item.amount}
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
