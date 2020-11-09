import React from "react";
import { View, StyleSheet } from "react-native";
import ChartComponenent from "../components/ChartComponenent";
import HeaderComponent from "../components/Header";
import Screen from "../components/Screen";

function ExpensesScreen({ navigation }) {
  return (
    <Screen>
      <HeaderComponent navigation={navigation} />
      <View style={styles.container}>
        <ChartComponenent from="#FDF8AD" to="#F987D0" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default ExpensesScreen;
