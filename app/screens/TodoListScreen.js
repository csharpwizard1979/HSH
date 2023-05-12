import React, { useState } from "react";
import { Image, View, StyleSheet, FlatList } from "react-native";

import config from "../configs/config";
import todoList from "../data/mocks/todoList";
import {
  AppText,
  ListItem,
  ListItemAction,
  Icon,
} from "../components/controls";

function TodoListScreen(props) {
  const [todos, setTodos] = useState(todoList);

  const handleComplete = (item) => {
    setTodos(todos.filter((x) => x.id !== item.id));
  };

  return (
    <View style={config.styles.screen}>
      <Image
        style={styles.image}
        source={require("../assets/Maintenace.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.heading}>My TODO Lists</AppText>
      </View>
      <View style={styles.container}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              subTitle={item.description}
              IconComponent={<Icon name={config.icons.list} />}
              showIconRight={false}
              renderLeftActions={() => (
                <ListItemAction
                  background={config.colors.danger}
                  icon={{ library: "MCI", name: config.icons.trash }}
                  onPress={() => handleComplete(item)}
                />
              )}
            />
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

export default TodoListScreen;
