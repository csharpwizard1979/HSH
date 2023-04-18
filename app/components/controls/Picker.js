import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Modal, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import config from "../../configs/config";
import AppText from "../controls/AppText";
import PickerItemList from "./PickerItemList";

function Picker({
  icon,
  items,
  onSelectItem,
  PickerItemComponent = PickerItemList,
  placeholder,
  selectedItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[config.styles.pickerContainer, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={config.colors.medium}
              style={config.styles.pickerIcon}
            />
          )}
          {selectedItem ? (
            <AppText style={config.styles.pickerText}>
              {selectedItem.label}
            </AppText>
          ) : (
            <AppText style={config.styles.pickerPlaceholder}>
              {placeholder}
            </AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={config.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <View style={config.styles.screen}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={3}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
}

export default Picker;
