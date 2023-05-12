import React, { useEffect, useState } from "react";
import { Alert, Image, View, FlatList, StyleSheet } from "react-native";

import config from "../configs/config";
import {
  AppText,
  Button,
  ListItem,
  Icon,
  TabItem,
  ListItemAction,
} from "../components/controls";
import shoppingList from "../data/mocks/shoppingList";
import { Routes } from "../components/navigation";

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
          onPress: () => navigation.navigate(Routes.HOME),
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
      <Image
        style={styles.image}
        source={require("../assets/recipe-cover.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.heading}>My Shopping List</AppText>
      </View>
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
                    <ListItemAction
                      background={config.colors.danger}
                      icon={{ library: "MCI", name: config.icons.trash }}
                      onPress={() => handleRemove(item)}
                    />
                  )}
                  renderLeftActions={() => (
                    <ListItemAction
                      background={config.colors.success}
                      icon={{ library: "MI", name: config.icons.addCheck }}
                      onPress={() => handleComplete(item)}
                    />
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
                    <ListItemAction
                      background={config.colors.warning}
                      icon={{ library: "MI", name: config.icons.addTask }}
                      onPress={() => handleActivate(item)}
                    />
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
  detailsContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  footer: {
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

export default ShoppingListScreen;
