import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BackStackNavigation from "../components/BackStackNavigation";

function AddExpenseScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <BackStackNavigation navigation={navigation} />
      <Text>AddExpenseScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
});
export default AddExpenseScreen;
