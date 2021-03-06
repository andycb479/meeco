import React, { useState } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import expensesApi from "../api/expenses";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import BackStackNavigation from "../components/BackStackNavigation";
import UploadScreen from "../components/UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(100000).label("Amount"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().label("images"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "car",
    label: "Car",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "silverware-fork-knife",
    label: "Food",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "glass-cocktail",
    label: "Entertaiment",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "home",
    label: "Home",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "bank",
    label: "Services",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "medical-bag",
    label: "Medicine",
    value: 6,
  },
  {
    backgroundColor: "#a55eea",
    icon: "spa",
    label: "Sport",
    value: 7,
  },
  {
    backgroundColor: "#778ca3",
    icon: "cart",
    label: "Shopping",
    value: 8,
  },
];

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

function AddExpensesScreen({ navigation }) {
  const [uploadVisibile, setUploadVisible] = useState(false);

  const handleSubmit = async (expense) => {
    setUploadVisible(true);
    const result = await expensesApi.addExpense(expense);
    wait(600).then(() => {
      navigation.goBack();
      setUploadVisible(false);
    });
    if (!result.ok) return alert("Could not save the listings");
  };

  return (
    <Screen style={styles.container}>
      <BackStackNavigation style={styles.back} navigation={navigation} />
      <UploadScreen visible={uploadVisibile} />
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Amount"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
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
          from="#ec008c"
          to="#f9ed32"
          title="Add Expense"
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
export default AddExpensesScreen;
