import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import config from "../configs/config";
import colors from "../configs/colors";

function RecipeBoxScreen(props) {
  const [filter, setFilter] = useState();
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    // TODO get all recipes
  }, []);
  return (
    <View style={config.styles.screen}>
      <View style={styles.container}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="filter-outline"
            size={25}
            color={colors.info}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name="favorite-outline"
            size={25}
            color={colors.danger}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="file-search-outline"
            size={25}
            color={colors.warningAlt}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="add-circle" size={25} color={colors.success} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.black,
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 40,
    width: "100%",
  },
});

export default RecipeBoxScreen;
