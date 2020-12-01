import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import BackStackNavigation from "../components/BackStackNavigation";
import incomesApi from "../api/incomes";
import UploadScreen from "../components/UploadScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(100000).label("Amount"),
  description: Yup.string().label("Description"),
});

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const storeIncomeCount = async (value) => {
  await AsyncStorage.setItem("incomesCount", value);
};

const getIncomesCount = async () => {
  const value = await AsyncStorage.getItem("incomesCount");
  if (!value) {
    storeIncomeCount("0");
    return 0;
  } else {
    return parseInt(value);
  }
};

function AddIncomeScreen({ navigation }) {
  const [uploadVisibile, setUploadVisible] = useState(false);
  const [count, setCount] = useState(0);

  const handleSubmit = async (income) => {
    setUploadVisible(true);
    const result = await incomesApi.addIncome(income);
    if (!result.ok) return alert("Could not save the listings");
    var value = count;
    value += 1;
    storeIncomeCount(value.toString());
    wait(600).then(() => {
      setUploadVisible(false);
      navigation.goBack();
    });
  };

  useEffect(() => {
    getIncomesCount().then((incomeCount) => {
      setCount(incomeCount);
    });
  }, []);

  return (
    <Screen style={styles.container}>
      <BackStackNavigation style={styles.back} navigation={navigation} />
      <UploadScreen visible={uploadVisibile} incomes count={count} />
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Amount"
          width={120}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton
          disabled={uploadVisibile}
          from="#20bf5a"
          to="#01bbec"
          title="Add Income"
        />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  back: {
    marginTop: 0,
    marginLeft: -5,
  },
});
export default AddIncomeScreen;
