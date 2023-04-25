import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import config from "../../configs/config";
import AppText from "./AppText";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showIconRight = true,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          underlayColor={config.colors.light}
          onPress={onPress}
        >
          <View style={config.styles.listItemContainer}>
            {IconComponent}
            {image && (
              <Image style={config.styles.listItemImage} source={image} />
            )}
            <View style={config.styles.listItemDetailsContainer}>
              <AppText style={config.styles.listItemTitle} numberOfLines={1}>
                {title}
              </AppText>
              {subTitle && (
                <AppText style={config.styles.listItemSubTitle}>
                  {subTitle}
                </AppText>
              )}
            </View>
            {showIconRight && (
              <MaterialCommunityIcons
                color={config.colors.medium}
                name="chevron-right"
                size={25}
              />
            )}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

export default ListItem;
