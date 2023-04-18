import React from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";

import styles from "../../configs/styles";
import { AppText } from "../controls";

function Card({ title, description, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.cardTitle}>{title}</AppText>
          <AppText style={styles.cardSubtitle}>{description}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;
