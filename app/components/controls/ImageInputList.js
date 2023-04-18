import React, { useRef } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  const handleSizeChange = () => {
    scrollView.current.scrollToEnd();
  };

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={handleSizeChange}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.imageInput}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
  },
  imageInput: {
    marginRight: 10,
  },
});

export default ImageInputList;
