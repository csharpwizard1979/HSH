import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import config from "../configs/config";
import { Button, ListItem, Icon } from "../components/controls";

function ShoppingListScreen(props) {
  const listItems = [
    {
      id: 1,
      title: "Test Master Collection",
      description: "test1",
      slug: "home",
      inventoryId: 1,
      status: "active",
    },
  ];
  return (
    <View style={config.styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={listItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              IconComponent={<Icon name={config.icons.cart} />}
            />
          )}
        />
      </View>
      <View style={styles.btnContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row-reverse",
    backgroundColor: "green",
    height: 50,
    width: "25%",
  },
  container: {
    padding: 20,
  },
});

export default ShoppingListScreen;
