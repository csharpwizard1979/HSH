import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import config from "../configs/config";
import recipeFilter from "../data/recipeFilter";
import mockRecipes from "../data/mocks/recipes";
import categories from "../data/categories";
import {
  ListItem,
  ListItemSeparator,
  PickerItemCategory,
} from "../components/controls";

function RecipeBoxScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState(recipeFilter);
  const [recipes, setRecipes] = useState(mockRecipes);

  useEffect(() => {
    // TODO get all recipes
    if (filter.filterValue) {
      if (filter.filterValue === "favorites") {
        setRecipes(mockRecipes.filter((x) => x.isFavorite));
      } else
        setRecipes(
          mockRecipes.filter((x) => x.category === filter.filterValue)
        );
    } else setRecipes(mockRecipes);
  }, [filter]);

  const handleFilter = () => {
    setModalVisible(true);
    updateIconStatus("filter");
  };

  const handleFavorite = () => {
    updateIconStatus("favorite");
  };

  const updateCategory = (selectedItem) => {
    const updatedFilter = {
      ...filter,
      filterValue: selectedItem,
    };
    setFilter(updatedFilter);
  };

  const updateIconStatus = (activeIcon) => {
    let updatedfilter = {
      ...filter,
      filterIcon: {
        iconName:
          activeIcon === "filter"
            ? config.icons.filterActive
            : config.icons.filter,
        color:
          activeIcon === "filter" ? config.colors.primary : config.colors.black,
      },
      favoriteIcon: {
        iconName:
          activeIcon === "favorite"
            ? config.icons.favoriteActive
            : config.icons.favorite,
        color:
          activeIcon === "favorite"
            ? config.colors.danger
            : config.colors.black,
      },
    };

    if (activeIcon === "favorite")
      updatedfilter = { ...updatedfilter, filterValue: "favorites" };

    setFilter(updatedfilter);
  };

  return (
    <>
      <View style={config.styles.screen}>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleFilter}>
            <MaterialCommunityIcons
              name={filter.filterIcon.iconName}
              size={25}
              color={filter.filterIcon.color}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFavorite}>
            <MaterialIcons
              name={filter.favoriteIcon.iconName}
              size={25}
              color={filter.favoriteIcon.color}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name={config.icons.addItem}
              size={25}
              color={config.colors.success}
            />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={recipes}
            keyExtractor={(recipe) => recipe.id.toString()}
            renderItem={({ item }) => (
              <View style={config.styles.detailsContainer}>
                <ListItem
                  title={item.title}
                  subTitle={item.description}
                  image={item.image}
                />
                <ListItemSeparator />
              </View>
            )}
          />
        </View>
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
                  updateCategory(item.value);
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
  container: {
    alignItems: "center",
    backgroundColor: config.colors.light,
    borderRadius: 10,
    flexDirection: "row",
    height: 40,
    justifyContent: "space-evenly",
    marginRight: 20,
    marginLeft: 20,
  },
});

export default RecipeBoxScreen;
