import React from "react";
import { View, Text } from "react-native";

import config from "../configs/config";

function RecipeItemScreen(props) {
  return (
    <View style={config.styles.screen}>
      <Text>Recipe Item Screen</Text>
    </View>
  );
}

export default RecipeItemScreen;
