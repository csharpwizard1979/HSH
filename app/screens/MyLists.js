import React from "react";
import { View, StyleSheet } from "react-native";

import config from "../configs/config";
import { Text } from "react-native";

function MyLists(props) {
  return (
    <View style={config.styles.screen}>
      <Text>My Lists</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MyLists;
