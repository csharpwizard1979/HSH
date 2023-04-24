import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import config from "../configs/config";
import { Button, ListItem, Icon, TabItem } from "../components/controls";
import shoppingList from "../data/mocks/shoppingList";
import { Alert } from "react-native";

function ShoppingListScreen({ navigation }) {
  const [active, setActive] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [list, setList] = useState(shoppingList);

  useEffect(() => {
    let status = "completed";
    if (active) status = "active";
    setList(shoppingList.filter((s) => s.status === status));
  }, [active, completed]);

  const handleActiveTab = () => {
    setActive(true);
    setCompleted(false);
  };

  const handleCompletedTab = () => {
    setActive(false);
    setCompleted(true);
  };

  const handleCheckout = () => {
    // TODO: clear completed items from shopping list
    // TODO: update inventory with completed items
    Alert.alert(
      "System Update",
      "Your inventory items will be updated with your completed items.",
      [
        {
          text: "Ok",
          onPress: () => navigation.navigate("Main"),
        },
      ]
    );
  };

  return (
    <View style={config.styles.screen}>
      <View style={styles.btnContainer}>
        <TabItem isActive={active} onPress={handleActiveTab}>
          Active
        </TabItem>
        <TabItem isActive={completed} onPress={handleCompletedTab}>
          Completed
        </TabItem>
      </View>
      <View style={styles.container}>
        <FlatList
          data={list}
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
      {completed && <Button title="Done" onPress={handleCheckout} />}
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    padding: 20,
  },
});

export default ShoppingListScreen;
