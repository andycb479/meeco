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
  imageURI,
}) {
  return (
    <View style={styless.container}>
      <View style={{ position: "absolute", top: 25, left: 5 }}>
        <TouchableOpacity onPress={() => onPress(false)}>
          <MaterialCommunityIcons name="chevron-left" size={38} color="red" />
        </TouchableOpacity>
      </View>
      {!imageURI ? (
        <Image style={styless.image} source={require("../src/Meeco_Img.png")} />
      ) : (
        <Image style={styless.image} source={{ uri: imageURI }} />
      )}

      <View style={styless.infoContainer}>
        <View style={styless.headerTitleContainer}>
          <View style={styless.iconBorder}>
            <MaterialCommunityIcons color={"#666"} size={33} name={iconName} />
          </View>
          <Text style={styless.itemTitle}>{title}</Text>
        </View>
        <View style={styless.itemDescriptionContainer}>
          <Text style={styless.itemDescription}>
            {description ? description : null}
          </Text>
          <View>
            <Text style={[styless.itemTitle, { marginBottom: 10 }]}>
              {amount}
            </Text>
            <Text style={{ color: "#888" }}>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
  image: {
    height: "65%",
    width: "100%",
    zIndex: -1,
  },
  infoContainer: {
    minHeight: 150,
    paddingHorizontal: 15,
    paddingVertical: 30,
    position: "absolute",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    bottom: 0,
    justifyContent: "space-between",
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
    color: "#888",
    marginBottom: 10,
  },
  itemDescriptionContainer: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flex: 1,
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
