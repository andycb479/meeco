import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import LottieView from "lottie-react-native";
import ConfettiCannon from "react-native-confetti-cannon";

function UploadScreen({ visible = false, incomes, count = 1 }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.container}>
        {count % 2 !== 0 ? (
          <ConfettiCannon
            count={200}
            origin={{ x: 15, y: -20 }}
            fallSpeed={3500}
            colors={["#20bf5a", "#01bbec"]}
          />
        ) : null}

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
