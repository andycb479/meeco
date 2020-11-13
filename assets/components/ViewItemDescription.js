import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import HomeScreenIcon from "./HomeScreenIcon";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewItemDescription({ onPress }) {
  return (
    <View style={styless.container}>
      <View style={{ position: "absolute", top: 15, left: 5 }}>
        <TouchableOpacity onPress={() => onPress(false)}>
          <MaterialCommunityIcons name="chevron-left" size={38} color="black" />
        </TouchableOpacity>
      </View>
      <Image style={styless.image} source={require("../src/img.png")} />
      <View style={styless.infoContainer}>
        <View style={styless.headerTitleContainer}>
          <View style={styless.iconBorder}>
            <MaterialCommunityIcons color={"#666"} size={33} name="spa" />
          </View>
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
    minHeight: 300,
    paddingHorizontal: 15,
    paddingVertical: 30,
    position: "absolute",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    bottom: 0,
  },
  headerTitleContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginBottom: 5,
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
  iconBorder: {
    width: 50,
    height: 50,
    borderRadius: 7,
    borderColor: "#666",
    borderWidth: 2,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
});
export default ViewItemDescription;
