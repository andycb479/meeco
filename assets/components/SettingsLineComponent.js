import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Flag from "react-native-flags";

function SettingLineComponent({
  iconName,
  settingTitle,
  settingValue,
  flag,
  color,
}) {
  const randomRGB = () => {
    //Color Generation Function
    const red = Math.floor(Math.random() * 190);
    const green = Math.floor(Math.random() * 150);
    const blue = Math.floor(Math.random() * 50);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <View style={styles.line}>
      <View style={styles.currencyContainer}>
        {iconName ? (
          <FontAwesome5
            name={iconName}
            size={20}
            color={!color ? randomRGB() : color}
          />
        ) : null}
        {flag ? <Flag code={flag} size={24} /> : null}
        <Text style={{ marginTop: 3 }}>{settingTitle}</Text>
      </View>
      <Text>{settingValue}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  line: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
  },
  currencyContainer: {
    alignItems: "center",
  },
});

export default SettingLineComponent;
