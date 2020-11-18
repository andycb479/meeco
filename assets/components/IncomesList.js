import React, { useRef } from "react";
import { FlatList, StyleSheet } from "react-native";
import LineItemExpenses from "./LineItemExpenses";

function IncomesList({ data }) {
  return (
    <FlatList
      contentContainerStyle={styles.scroll}
      data={data}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <LineItemExpenses
          iconName={"currency-usd"}
          date={new Date(item.date).toString().substring(4, 21)}
          title={item.name}
          description={item.description}
          amount={item.value + " lei"}
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
