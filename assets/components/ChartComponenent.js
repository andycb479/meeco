import React from "react";
import { View, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

function ChartComponenent({ from, to }) {
  return (
    <View>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: "#000000",
          backgroundGradientFrom: from,
          backgroundGradientTo: to,
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(96, 96, 96, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          margin: 10,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
export default ChartComponenent;
