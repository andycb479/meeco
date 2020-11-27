import React from "react";
import { View, StyleSheet, Image, Button, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

function WelcomeLoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../src/logo.png")} />
      <View style={{ paddingTop: 330 }}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 150,
    paddingBottom: 70,
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
  },
});
export default WelcomeLoginScreen;
