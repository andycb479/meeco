import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import PDFGenerator from "../utility/PDFGenerator";

function ExportPDFButton({ data, incomes }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.exportButton}
        onPress={() => PDFGenerator.pdfCreatorHandler(data,incomes)}
      >
        <Text style={{ color: "white" }}>Export PDF</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", alignItems: "center" },
  exportButton: {
    width: 130,
    height: 28,
    backgroundColor: "#222",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
export default ExportPDFButton;
