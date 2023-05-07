import React from "react";
import { View, FlatList } from "react-native";

import config from "../../configs/config";
import { PickerItemCategory } from "../controls";
import categories from "../../data/categories";

function CategorySelector({ onPress }) {
  return (
    <View style={config.styles.screen}>
      <FlatList
        data={categories}
        keyExtractor={(category) => category.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <PickerItemCategory item={item} onPress={onPress} />
        )}
      />
    </View>
  );
}

export default CategorySelector;
