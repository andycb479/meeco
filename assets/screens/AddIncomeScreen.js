import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BackStackNavigation from "../components/BackStackNavigation";

function AddIncomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <BackStackNavigation navigation={navigation} />
      <Text>AddIncomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
});
export default AddIncomeScreen;
