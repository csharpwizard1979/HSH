import React from "react";
import { Image, View, StyleSheet } from "react-native";

import config from "../configs/config";
import { AppText, Icon, ListItem } from "../components/controls";
import { Routes } from "../components/navigation";

function MyLists({ navigation }) {
  return (
    <View style={config.styles.screen}>
      <Image
        style={styles.image}
        source={require("../assets/Maintenace.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.heading}>My Lists</AppText>
      </View>
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
  detailsContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    color: config.colors.primary,
    fontSize: 22,
    fontWeight: "700",
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default MyLists;
