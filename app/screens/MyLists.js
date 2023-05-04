import React from "react";
import { View, StyleSheet } from "react-native";

import config from "../configs/config";
import { Icon, ListItem } from "../components/controls";
import { Routes } from "../components/navigation";

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
          onPress={() => navigation.navigate(Routes.PROJECT_LIST)}
        />
        <ListItem
          title="TODO List"
          IconComponent={
            <Icon
              name={config.icons.list}
              library="MI"
              backgroundColor={config.colors.success}
            />
          }
          onPress={() => navigation.navigate(Routes.TODO)}
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
          onPress={() => navigation.navigate(Routes.SHOPPING_LIST)}
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
