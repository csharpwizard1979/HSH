import React, { useEffect } from "react";
import { View, Image, TouchableWithoutFeedback, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import config from "../../configs/config";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      Alert.alert("You need to grant permission in order to upload images.", [
        { text: "Ok" },
      ]);
  };
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
        },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.canceled) onChangeImage(result.assets[0].uri);
    } catch (error) {
      console.log("Error reading the an image", error);
      Alert.alert("Error uploading the image. Please try again.", [
        { text: "Ok" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={config.styles.imageInputContainer}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={config.colors.medium}
          />
        )}
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={config.styles.imageInputImage}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ImageInput;
