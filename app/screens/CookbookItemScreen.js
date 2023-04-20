import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import config from "../configs/config";
import categories from "../data/categories";
import {
  AppText,
  ListItem,
  ListItemSeparator,
  PickerItemCategory,
} from "../components/controls";
import { Routes } from "../components/navigation";

function CookbookItemScreen({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [recipes, setRecipes] = useState(route.params.recipes);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter)
      setRecipes(route.params.recipes?.filter((x) => x.category === filter));
    else setRecipes(route.params.recipes);
  }, [filter]);

  return (
    <>
      <View style={config.styles.screen}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.text}>{route.params.title}::Recipes</AppText>
          <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <MaterialCommunityIcons
              name="filter-outline"
              size={30}
              color={config.colors.primary}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate(Routes.RECIPEBOX)}
          >
            <MaterialIcons
              name="library-add"
              size={30}
              color={config.colors.success}
            />
          </TouchableWithoutFeedback>
        </View>
        <FlatList
          data={recipes}
          keyExtractor={(recipe) => recipe.id.toString()}
          renderItem={({ item }) => (
            <View style={config.styles.detailsContainer}>
              <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => navigation.navigate(Routes.RECIPEITEM, item)}
              />
              <ListItemSeparator />
            </View>
          )}
        />
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <View style={config.styles.screen}>
          <FlatList
            data={categories}
            keyExtractor={(category) => category.id.toString()}
            numColumns={3}
            renderItem={({ item }) => (
              <PickerItemCategory
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  setFilter(item.value);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: config.colors.light,
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 200,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    flex: 1,
    alignSelf: "flex-end",
  },
});

export default CookbookItemScreen;
