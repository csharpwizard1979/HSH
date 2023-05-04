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
  const [status, setStatus] = useState("active");
  const [activeList, setActiveList] = useState(() =>
    shoppingList.filter((x) => x.status === "active")
  );
  const [completedList, setCompletedList] = useState(() =>
    shoppingList.filter((x) => x.status === "completed")
  );

  const handleActivate = (item) => {
    setActiveList([...activeList, item]);
    setCompletedList(completedList.filter((x) => x.id !== item.id));
  };

  const handleComplete = (item) => {
    setCompletedList([...completedList, item]);
    setActiveList(activeList.filter((x) => x.id !== item.id));
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

  const handleRemove = (item) => {
    setActiveList(activeList.filter((x) => x.id !== item.id));
  };

  const toggleStatus = () => {
    setStatus(status === "active" ? "completed" : "active");
  };

  return (
    <View style={config.styles.screen}>
      <View style={styles.btnContainer}>
        <TabItem isActive={status === "active"} onPress={toggleStatus}>
          Active
        </TabItem>
        <TabItem isActive={status === "completed"} onPress={toggleStatus}>
          Completed
        </TabItem>
      </View>
      <View style={styles.container}>
        {status === "active" && (
          <>
            <FlatList
              data={activeList}
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
          </>
        )}
        {status === "completed" && (
          <>
            <FlatList
              data={completedList}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ListItem
                  title={item.title}
                  subTitle={item.description}
                  IconComponent={<Icon name={config.icons.cart} />}
                  showIconRight={false}
                  renderLeftActions={() => (
                    <ListItemComplete onPress={() => handleActivate(item)} />
                  )}
                />
              )}
            />
            <View style={styles.footer}>
              <Button title="Done" color="success" onPress={handleCheckout} />
            </View>
          </>
        )}
      </View>
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
