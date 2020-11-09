import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderComponent from "../components/Header";
import Screen from "../components/Screen";
import ChartComponenent from "../components/ChartComponenent";

function IncomesScreen({ navigation }) {
  return (
    <Screen>
      <HeaderComponent navigation={navigation} />
      <View style={styles.container}>
        <ChartComponenent from="#9FEDFF" to="#42e879" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default IncomesScreen;
