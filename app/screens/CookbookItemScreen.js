import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";

import config from "../configs/config";
import { AppText, Button, ListItem } from "../components/controls";
import { Routes } from "../components/navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function CookbookItemScreen({ navigation, route }) {
  const item = route.params;
  return (
    <View style={config.styles.screen}>
      <View style={styles.detailsContainer}>
        <AppText style={styles.text}>{item.title}/Recipes</AppText>
        <MaterialCommunityIcons
          name="file-search-outline"
          size={20}
          color={config.colors.primary}
        />
      </View>
      <FlatList
        data={item.recipes}
        keyExtractor={(recipe) => recipe.id.toString()}
        renderItem={({ item }) => (
          <View style={config.styles.detailsContainer}>
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => navigation.navigate(Routes.RECIPEITEM, item)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
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
