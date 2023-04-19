import React from "react";
import { View, Text } from "react-native";

import config from "../configs/config";
import { AppText } from "../components/controls";

function RecipesScreen(props) {
  return (
    <View style={config.styles.screen}>
      <View style={config.styles.detailsContainer}>
        <AppText>All Recipes for this Cookbook</AppText>
      </View>
    </View>
  );
}

export default RecipesScreen;
