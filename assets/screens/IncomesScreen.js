import React, { useState } from "react";
import { View, Button, StyleSheet, Modal } from "react-native";
import HeaderComponent from "../components/Header";
import Screen from "../components/Screen";
import ChartComponenent from "../components/ChartComponenent";
import ViewItemDescription from "../components/ViewItemDescription";

function IncomesScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Screen>
      <HeaderComponent navigation={navigation} />
      <View style={styles.container}>
        <ChartComponenent from="#9FEDFF" to="#42e879" />
        <Button title="Modal" onPress={() => setModalVisible(true)} />
        <Modal visible={modalVisible} animationType="slide">
          <ViewItemDescription onPress={setModalVisible} />
        </Modal>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default IncomesScreen;
