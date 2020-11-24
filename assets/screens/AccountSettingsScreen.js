import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import Screen from "../components/Screen";
import BackStackNavigation from "../components/BackStackNavigation";
import SettingsList from "../components/SettingsList";

const data = [
  {
    id: 1,
    settingTitle: "First Name:",
    settingValue: "Andy",
  },
  {
    id: 2,
    settingTitle: "Currency:",
    settingValue: "MDL",
  },
  {
    id: 3,
    settingTitle: "Email:",
    settingValue: "ciobanu.andy@gmail.com",
  },
];

function AccountSettingsScreen({ navigation }) {
  const { user, logOut } = useAuth();
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.myAcc}>
          <View style={styles.topBar}>
            <BackStackNavigation style={{ flex: 1 }} navigation={navigation} />
            <Text style={styles.text}> My account</Text>
          </View>
          <Image
            style={styles.logo}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          ></Image>
        </View>

        <View style={styles.settings}>
          <View>
            <SettingsList data={data} settingName="Account Details" />
            <View
              style={{ width: "100%", alignItems: "center", marginTop: 20 }}
            >
              <TouchableHighlight
                style={[styles.buttons, { backgroundColor: "#373435" }]}
                onPress={() => console.log("test")}
              >
                <Text style={styles.buttonText}>Log out</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  myAcc: {
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  settings: {
    flex: 2,
    paddingHorizontal: 15,
  },
  topBar: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    marginBottom: 30,
  },
  text: {
    flex: 2,
    fontSize: 24,
    alignSelf: "center",
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  buttons: {
    width: 275,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
export default AccountSettingsScreen;
