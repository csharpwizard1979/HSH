import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import config from "../configs/config";
import {
  AppText,
  Icon,
  ListItem,
  ListItemSeparator,
} from "../components/controls";

function MyLists({ navigation }) {
  return (
    <View style={config.styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Project List"
          IconComponent={
            <Icon
              name={config.icons.projects}
              backgroundColor={config.colors.warning}
            />
          }
          onPress={() => navigation.navigate("Projects")}
        />
        <ListItem
          title="Shopping List"
          IconComponent={
            <Icon
              name={config.icons.shopping}
              library="MI"
              backgroundColor={config.colors.danger}
            />
          }
          onPress={() => navigation.navigate("ShoppingList")}
        />
        <ListItem
          title="TODO List"
          IconComponent={
            <Icon
              name={config.icons.list}
              library="MI"
              backgroundColor={config.colors.danger}
            />
          }
          onPress={() => navigation.navigate("ShoppingList")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default MyLists;
