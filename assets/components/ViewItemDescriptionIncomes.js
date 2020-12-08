import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

function ViewItemDescriptionIncomes({
  onPress,
  title,
  date,
  amount,
  description,
}) {
  return (
    <View style={styless.container}>
      <View style={{ position: "absolute" }}>
        <TouchableOpacity onPress={() => onPress(false)}>
          <MaterialCommunityIcons name="chevron-left" size={38} color="green" />
        </TouchableOpacity>
      </View>

      <View style={styless.infoContainer}>
        <View style={styless.headerTitleContainer}>
          <View style={styless.iconBorder}>
            <MaterialCommunityIcons
              name="currency-usd"
              size={100}
              color="green"
            />
          </View>
          <Text numberOfLines={1} style={styless.itemTitle}>
            {title}
          </Text>
        </View>
        <View style={styless.itemDescriptionContainer}>
          <Text style={styless.itemDescription}>
            {description ? description : null}
          </Text>
          <Text
            style={[styless.itemTitle, { marginBottom: 10, color: "green" }]}
          >
            {amount}
          </Text>
          <Text style={{ color: "#888" }}>{date}</Text>
        </View>
      </View>
    </View>
  );
}
const styless = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  infoContainer: {
    marginTop: 50,
    paddingHorizontal: 15,
    paddingVertical: 30,
    width: "100%",
  },
  headerTitleContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
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
    borderTopColor: "#888",
    borderTopWidth: 1,
  },
  iconBorder: {
    width: 150,
    height: 150,
    borderRadius: 25,
    borderColor: "green",
    borderWidth: 3,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});
export default ViewItemDescriptionIncomes;
