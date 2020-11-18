import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import useApi from "../hooks/useApi";
import eachCategorySum from "../api/eachCategorySum";

function WelcomeScreen({ navigation }) {
  const { data, error, loading, request } = useApi(eachCategorySum.getSums);
  useEffect(() => {
    request();
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: 300,
          top: -15,
        }}
        onAnimationFinish={() => navigation.navigate("Main")}
        loop={false}
        source={require("../src/meeco.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default WelcomeScreen;
