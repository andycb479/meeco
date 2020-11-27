import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

function UploadScreen({ visible = false, incomes }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.container}>
        {!incomes ? (
          <LottieView
            autoPlay
            style={{
              width: 500,
              top: -15,
            }}
            loop={false}
            source={require("../src/expense_add.json")}
          />
        ) : (
          <LottieView
            autoPlay
            style={{
              width: 500,
              top: -15,
            }}
            loop={false}
            source={require("../src/income_add.json")}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
});
export default UploadScreen;
