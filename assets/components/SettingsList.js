import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import SettingLineComponent from "../components/SettingsLineComponent";

function SettingsList({ settingName, data, style = null }) {
  return (
    <>
      {settingName ? (
        <View style={[styles.header, style]}>
          <View style={styles.border}>
            <Text style={styles.headerText}>{settingName}</Text>
          </View>
        </View>
      ) : null}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SettingLineComponent
            iconName={item.iconName ? item.iconName : null}
            settingTitle={item.settingTitle}
            settingValue={item.settingValue}
          />
        )}
      />
    </>
  );
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
  },
  headerText: {
    fontSize: 20,
  },
  border: {
    borderBottomWidth: 2,
    borderBottomColor: "grey",
  },
});

export default SettingsList;
