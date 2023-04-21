import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Yup from "yup";

import config from "../configs/config";
import { AppText, ListItemSeparator, ImageInput } from "../components/controls";
import {
  Form,
  FormField,
  FormPicker,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  description: Yup.string().label("description"),
});

function RecipeCreateScreen(props) {
  return (
    <View style={config.styles.screen}>
      <View style={config.styles.detailsContainer}>
        <View style={styles.headingContainer}>
          <MaterialIcons
            name="restaurant-menu"
            size={40}
            color={config.colors.warningAlt}
          />
          <AppText style={styles.heading}>Add New Recipe</AppText>
          <MaterialIcons
            name="restaurant-menu"
            size={40}
            color={config.colors.warningAlt}
          />
        </View>
      </View>
      <View style={styles.formContainer}>
        <Form
          initialValues={{
            title: "",
            description: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <ImageInput />
          <View style={styles.separator} />
          <FormField name="title" placeholder="title" />
          <FormField name="description" placeholder="description" />
          <SubmitButton title="Add" />
        </Form>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  headingContainer: {
    alignItems: "center",
    backgroundColor: config.colors.light,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  heading: {
    color: config.colors.black,
    fontSize: 22,
    fontWeight: "bold",
    margin: 20,
    textTransform: "uppercase",
  },
  separator: {
    backgroundColor: config.colors.light,
    height: 4,
    marginTop: 20,
    width: "100%",
  },
});

export default RecipeCreateScreen;
