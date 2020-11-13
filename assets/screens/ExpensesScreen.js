import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet, Button, Modal } from "react-native";
import ChartComponenent from "../components/ChartComponenent";
import HeaderComponent from "../components/Header";
import LineItemExpenses from "../components/LineItemExpenses";
import Screen from "../components/Screen";
import ViewItemDescription from "../components/ViewItemDescription";

const data = [];

function ExpensesScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Screen>
      <HeaderComponent navigation={navigation} />
      <View style={styles.container}>
        <ChartComponenent from="#FDF8AD" to="#F987D0" />
        {/* Lista */}
        <Button title="Modal" onPress={() => setModalVisible(true)} />
        <Modal visible={modalVisible} animationType="slide">
          <ViewItemDescription onPress={setModalVisible} />
        </Modal>
        <LineItemExpenses />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default ExpensesScreen;
