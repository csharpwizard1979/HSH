import React from "react";
import { FlatList, View, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import {
  AppText,
  ListItem,
  Icon,
  ListItemSeparator,
} from "../components/controls";
import colors from "../configs/colors";
import styled from "../configs/styles";
import appSettings from "../data/appSettings";

function HomeScreen({ navigation }) {
  return (
    <View style={styled.screen}>
      <Image style={styles.image} source={require("../assets/Projects.jpg")} />
      <View style={styles.detailsContainer}>
        <AntDesign
          name="home"
          size={30}
          color={colors.primary}
          style={styles.headingIcon}
        />
        <AppText style={styles.heading}>Home Suite Home</AppText>
      </View>
      <View style={styles.settingsContainer}>
        <FlatList
          data={appSettings}
          keyExtractor={(appSetting) => appSetting.id.toString()}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              description={item.description}
              onPress={() => navigation.navigate(item.slug)}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  library={item.icon.library}
                />
              }
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 22,
    color: colors.primary,
  },
  headingIcon: {
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default HomeScreen;
