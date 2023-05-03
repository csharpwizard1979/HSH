import React, { useEffect, useState } from "react";
import { Alert, View, FlatList, StyleSheet } from "react-native";

import config from "../configs/config";
import {
  Button,
  ListItem,
  Icon,
  TabItem,
  ListItemRemove,
  ListItemComplete,
} from "../components/controls";
import shoppingList from "../data/mocks/shoppingList";

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

  const handleComplete = (item) => {};

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

  const handleRemove = (item) => {
    setList(shoppingList.filter((x) => x.id !== item.id));
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
              showIconRight={false}
              renderRightActions={() => (
                <ListItemRemove onPress={() => handleRemove(item)} />
              )}
              renderLeftActions={() => (
                <ListItemComplete onPress={() => handleComplete(item)} />
              )}
            />
          )}
        />
      </View>
      {completed && (
        <View style={styles.footer}>
          <Button title="Done" color="success" onPress={handleCheckout} />
        </View>
      )}
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
  footer: {
    padding: 20,
  },
});

export default ShoppingListScreen;
