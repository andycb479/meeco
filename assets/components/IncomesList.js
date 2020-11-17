import React, { useRef } from "react";
import { FlatList, StyleSheet } from "react-native";
import LineItemExpenses from "./LineItemExpenses";

function IncomesList({ data }) {
  return (
    <FlatList
      contentContainerStyle={styles.scroll}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <LineItemExpenses
          iconName={"currency-usd"}
          date={item.date}
          title={item.title}
          amount={item.amount}
          category={item.category}
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
