import React, { useState } from "react";
import { Image, View, StyleSheet, FlatList } from "react-native";

import config from "../configs/config";
import projects from "../data/mocks/projectList";
import {
  AppText,
  ListItem,
  ListItemAction,
  ListItemSeparator,
  Icon,
} from "../components/controls";

function ProjectListsScreen(props) {
  const [activeList, setActiveList] = useState(projects);

  const handleComplete = (item) => {
    setActiveList(activeList.filter((x) => x.id != item.id));
  };

  return (
    <View style={config.styles.screen}>
      <Image style={styles.image} source={require("../assets/Projects.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.heading}>My Projects</AppText>
      </View>
      <View style={styles.container}>
        <FlatList
          data={activeList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <>
              <ListItem
                title={item.name}
                subTitle={item.description}
                IconComponent={
                  <Icon
                    name={config.icons.projects}
                    backgroundColor={config.colors.warning}
                  />
                }
                showIconRight={false}
                renderLeftActions={() => (
                  <ListItemAction
                    background={config.colors.danger}
                    icon={{ library: "MCI", name: config.icons.trash }}
                    onPress={() => handleComplete(item)}
                  />
                )}
              />
              <ListItemSeparator />
            </>
          )}
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

export default ProjectListsScreen;
