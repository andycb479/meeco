import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ViewItemDescription from "../components/ViewItemDescription";

function LineItemExpenses({
  iconName,
  category,
  title,
  date,
  amount,
  description,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableWithoutFeedback
      title="Modal"
      onPress={() => setModalVisible(true)}
    >
      <View style={styles.container}>
        <View style={styles.expenseDetailContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.iconBorder}>
              <MaterialCommunityIcons
                color={"#666"}
                size={30}
                name={iconName}
              />
            </View>
            {category ? <Text>{category}</Text> : null}
          </View>
          <View style={styles.expenseDetailInnerContainer}>
            <Text style={styles.expenseDetailInnerContainerTitle}>{title}</Text>
            <Text style={styles.expenseDetailInnerContainerDate}>{date}</Text>
          </View>
        </View>
        <View style={styles.amountContainer}>
          {category ? (
            <Text style={{ fontWeight: "bold", color: "tomato" }}>
              {amount}
            </Text>
          ) : (
            <Text style={{ fontWeight: "bold", color: "green" }}>{amount}</Text>
          )}
        </View>
        <Modal visible={modalVisible} animationType="slide">
          <ViewItemDescription
            onPress={setModalVisible}
            iconName={iconName}
            title={title}
            date={date}
            amount={amount}
            description={description}
          />
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#c3c3c3",
  },
  expenseDetailContainer: {
    flex: 2,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  iconBorder: {
    width: 40,
    height: 40,
    borderRadius: 7,
    borderColor: "#666",
    borderWidth: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  expenseDetailInnerContainer: {
    marginLeft: 10,
  },
  amountContainer: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  expenseDetailInnerContainerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  expenseDetailInnerContainerDate: {
    fontSize: 14,
    color: "#666",
  },
  amountContainerText: {
    color: "tomato",
    fontWeight: "bold",
  },
});
export default LineItemExpenses;
