import React from "react";
import { View, StyleSheet, Text } from "react-native";

import config from "../configs/config";

function CookbookItemScreen(props) {
  return (
    <View style={config.styles.screen}>
      <Text>Cookbook Item Screen</Text>
    </View>
  );
}

export default CookbookItemScreen;
