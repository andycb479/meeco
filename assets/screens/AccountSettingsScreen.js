import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import BackStackNavigation from "../components/BackStackNavigation";

function AccountSettingsScreen({ navigation }) {
  return (
    <Screen>
      <BackStackNavigation navigation={navigation} />
      <View style={styles.myAcc}>
        <Text style={styles.text}> My account</Text>
      </View>

      <View style={styles.iconAndAccDet}>
        <View style={styles.border}>
          <Image
            style={styles.Logo}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          ></Image>
          <Text style={styles.accountDetails}>Account details</Text>
        </View>
      </View>

      <View style={styles.container1}>
        <View style={styles.smallcontainer1}>
          <Text style={styles.data}>First Name</Text>
          <Text style={styles.data}>Currency</Text>
          <Text style={styles.data}>Setting</Text>
          <Text style={styles.data}>Setting</Text>
        </View>

        <View style={styles.smallcontainer2}>
          <Text style={styles.data}>Andy</Text>
          <Text style={styles.data}>MDL</Text>
          <Text style={styles.data}>value</Text>
          <Text style={styles.data}>value</Text>
        </View>
      </View>

      <View style={styles.category}>
        <Text style={styles.accountDetails}>Category</Text>
      </View>

      <View style={styles.container1}>
        <View style={styles.smallcontainer1}>
          <Text style={styles.data}>Setting</Text>
          <Text style={styles.data}>Setting</Text>
          <Text style={styles.data}>Setting</Text>
        </View>

        <View style={styles.smallcontainerV2}>
          <Text style={styles.data}>value</Text>
          <Text style={styles.data}>value</Text>
          <Text style={styles.data}>value</Text>
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

  iconAndAccDet: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  myAcc: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
  accountDetails: {
    marginTop: 35,
    marginRight: 230,
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  border: {
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  data: {
    marginTop: 10,
    fontSize: 18,
    marginBottom: 10,
  },
  reform1: {
    marginTop: 35,
    marginRight: 270,
    fontSize: 16,
    marginBottom: 10,
  },
  container1: {
    flexDirection: "row",
  },
  smallcontainer1: {
    marginLeft: 40,
  },
  smallcontainer2: {
    marginLeft: 190,
  },
  category: {
    marginLeft: 30,
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    marginRight: 30,
  },
  topBorder: {
    borderTopWidth: 2,
    borderTopColor: "grey",
  },
  iconAndAccDet1: {
    justifyContent: "center",
    alignItems: "center",
  },
  smallcontainerV2: {
    marginLeft: 215,
  },
  Logo: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
});
export default AccountSettingsScreen;
