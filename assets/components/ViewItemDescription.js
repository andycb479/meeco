import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import HomeScreenIcon from "./HomeScreenIcon";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewItemDescription({
  onPress,
  iconName,
  title,
  date,
  amount,
  description,
}) {
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
            <MaterialCommunityIcons color={"#666"} size={33} name={iconName} />
          </View>
          <Text style={styless.itemTitle}>{title}</Text>
        </View>
        <View style={styless.itemDescriptionContainer}>
          <Text style={styless.itemDescription}>
            {description
              ? description
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"}
          </Text>
          <Text style={[styless.itemTitle, { marginBottom: 10 }]}>
            {amount}
          </Text>
          <Text>{date}</Text>
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
