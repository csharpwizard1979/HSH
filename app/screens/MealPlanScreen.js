import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { View, StyleSheet } from "react-native";

import config from "../configs/config";
import {
  AppText,
  Icon,
  ListItem,
  ListItemSeparator,
} from "../components/controls";

function MealPlanScreen(props) {
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = { weekday: "long" };

    setCurrentDay(date.toLocaleDateString("en-US", options));
  }, [currentDay]);
  return (
    <View style={config.styles.screen}>
      <Image
        style={config.styles.cardImage}
        source={require("../assets/recipe-cover.jpg")}
      />
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.text}>{currentDay}</AppText>
        </View>
        <View style={styles.menuItem}>
          <AppText style={styles.text}>Breakfast</AppText>
          <ListItemSeparator />
          <ListItem
            title="Grape Nuts"
            subTitle="Cereal"
            IconComponent={
              <Icon
                name={config.icons.food}
                library="MI"
                iconColor={config.colors.white}
                backgroundColor={config.colors.warning}
              />
            }
          />
          <ListItemSeparator />
        </View>
        <View style={styles.menuItem}>
          <AppText style={styles.text}>Lunch</AppText>
          <ListItemSeparator />
          <ListItem
            title="Green Chopped Salad"
            subTitle="Soups and Salads"
            IconComponent={
              <Icon
                name={config.icons.food}
                library="MI"
                iconColor={config.colors.white}
                backgroundColor={config.colors.warning}
              />
            }
          />
          <ListItemSeparator />
        </View>
        <View style={styles.menuItem}>
          <AppText style={styles.text}>Dinner</AppText>
          <ListItemSeparator />
          <ListItem
            title="Chicken Legs and Asparagus"
            subTitle="Main Entree"
            IconComponent={
              <Icon
                name={config.icons.food}
                library="MI"
                iconColor={config.colors.white}
                backgroundColor={config.colors.warning}
              />
            }
          />
          <ListItemSeparator />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    backgroundColor: config.colors.white,
    padding: 10,
  },
  container: {
    backgroundColor: config.colors.light,
    flex: 1,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    padding: 10,
  },
  image: {
    height: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MealPlanScreen;
