import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import styles from "../config/styles";
import BackStackNavigation from "./BackStackNavigation";
import HomeScreenIcon from "./HomeScreenIcon";

function ViewItemDescription({ onPress }) {
  return (
    <View style={styless.container}>
      <View style={{ position: "absolute", top: 30, left: 5 }}>
        <Button title="Close" onPress={() => onPress(false)} />
      </View>
      <Image style={styless.image} source={require("../src/img.png")} />
      <View style={styless.infoContainer}>
        <View style={styless.headerTitleContainer}>
          <HomeScreenIcon title icon="spa" />
          <Text style={styless.itemTitle}>New sneakers</Text>
        </View>
        <View style={styless.itemDescriptionContainer}>
          <Text style={styless.itemDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Text style={[styless.itemTitle, { marginBottom: 10 }]}>
            2500 MDL
          </Text>
          <Text>17 September 01:20</Text>
        </View>
      </View>
    </View>
  );
}
const styless = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "65%",
    width: "100%",
    zIndex: -1,
  },
  infoContainer: {
    position: "absolute",
    width: "100%",
    height: "42%",
    padding: 15,
    backgroundColor: "white",
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    bottom: 0,
  },
  headerTitleContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#555",
  },
  itemDescription: {
    fontSize: 18,
    color: "#777",
    marginBottom: 10,
  },
  itemDescriptionContainer: {
    paddingHorizontal: 20,
  },
});
export default ViewItemDescription;
