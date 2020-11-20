import React from "react";
import { View, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

function ChartComponenent({ data, from, to }) {
  var labels = [];
  data.labels.forEach((element) => {
    labels.push(element.substring(0, 3));
  });

  return (
    <View>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: data.data,
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
