import React from "react";
import { View, FlatList } from "react-native";

import styles from "../configs/styles";
import cookbooks from "../data/mocks/cookbooks";
import { Card } from "../components/controls";
import { Routes } from "../components/navigation";

function CookbooksScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={cookbooks}
        keyExtractor={(cookbook) => cookbook.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            image={item.image}
            onPress={() => navigation.navigate(Routes.COOKBOOKITEM, item)}
          />
        )}
      />
    </View>
  );
}

export default CookbooksScreen;
