import React from "react";
import { View, StyleSheet, Image, Button, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Screen from "../components/Screen";

function WelcomeLoginScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../src/logo.png")} />
        <View>
          <TouchableHighlight
            style={[styles.buttons, { backgroundColor: "#3aa553" }]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.buttons, { backgroundColor: "#373435" }]}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 65,
  },
  buttons: {
    width: 275,
    height: 50,
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default WelcomeLoginScreen;
