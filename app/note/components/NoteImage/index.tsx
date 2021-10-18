import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { Skeleton } from "@motify/skeleton";

import { styles, iconStyle } from "./styles";
import { INoteImageProps } from "../../types";
export function NoteImage(props: INoteImageProps) {
  const { uri, onCropPress, onRemovePress, path } = props;
  const [removeTap, setRemoveTap] = useState<boolean>(false);
  const [cropTap, setCropTap] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  function onRemoveTapStart() {
    setRemoveTap(true);
  }
  function onRemoveTapEnd() {
    setRemoveTap(false);
  }
  function onCropTapStart() {
    setCropTap(true);
  }
  function onCropTapEnd() {
    setCropTap(false);
  }
  function onCropPressed() {
    onCropPress(path);
  }
  function onRemovePressed() {
    onRemovePress(path);
  }
  function onImageLoad() {
    setLoading(false);
  }
  const { size, color, activeColor } = iconStyle;
  return (
    <Skeleton show={loading} colorMode={"light"}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri }}
          style={styles.image}
          onLoad={onImageLoad}
        >
          <BorderlessButton
            onBegan={onRemoveTapStart}
            onEnded={onRemoveTapEnd}
            onPress={onRemovePressed}
            onCancelled={onRemoveTapEnd}
            onFailed={onRemoveTapEnd}
          >
            <MaterialCommunityIcons
              name={"close-circle-outline"}
              size={size}
              color={removeTap ? activeColor : color}
            />
          </BorderlessButton>
          <BorderlessButton
            onBegan={onCropTapStart}
            onEnded={onCropTapEnd}
            onPress={onCropPressed}
            onCancelled={onCropTapEnd}
            onFailed={onCropTapEnd}
          >
            <MaterialCommunityIcons
              name={"crop"}
              size={size}
              color={cropTap ? activeColor : color}
            />
          </BorderlessButton>
        </ImageBackground>
      </View>
    </Skeleton>
  );
}
