import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function LineItemExpenses({ iconName, category, title, date, amount }) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.expenseDetailContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.iconBorder}>
              <MaterialCommunityIcons color={"#666"} size={30} name="home" />
            </View>
            <Text>Food</Text>
          </View>
          <View style={styles.expenseDetailInnerContainer}>
            <Text style>MC. Donalds</Text>
            <Text>17 September 14:02</Text>
          </View>
        </View>
        <View style={styles.amountContainer}>
          <Text>656 MDL</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  expenseDetailContainer: {
    flex: 2,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  iconBorder: {
    width: 40,
    height: 40,
    borderRadius: 7,
    borderColor: "#666",
    borderWidth: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  expenseDetailInnerContainer: {
    marginLeft: 10,
  },
  amountContainer: {
    flex: 1,
    flexDirection: "row-reverse",
  },
});
export default LineItemExpenses;
