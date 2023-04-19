import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";

import config from "../configs/config";
import { AppText, Card } from "../components/controls";
import { Routes } from "../components/navigation";

function CookbookItemScreen({ navigation, route }) {
  const item = route.params;
  return (
    <View style={config.styles.screen}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.text}>{item.title}</AppText>
      </View>
      <FlatList
        data={item.recipes}
        keyExtractor={(recipe) => recipe.id.toString()}
        renderItem={({ item }) => (
          <View style={config.styles.detailsContainer}>
            <Card
              title={item.title}
              description={item.description}
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
    alignItems: "center",
    marginTop: 15,
  },
  image: {
    width: "100%",
    height: 200,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default CookbookItemScreen;
