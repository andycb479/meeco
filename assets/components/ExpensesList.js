import React, { useRef } from "react";
import { FlatList, StyleSheet } from "react-native";
import LineItemExpenses from "./LineItemExpenses";

function ExpensesList({ data }) {
  return (
    <FlatList
      contentContainerStyle={styles.scroll}
      data={data}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <LineItemExpenses
          iconName={"car"}
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
