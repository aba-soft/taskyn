import React from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { Button, Caption, Title, Touchable } from "../../../library";
import { styles } from "./styles";
import { ICardProps } from "../../types";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

function CardComponent(props: ICardProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { name, description, onPress, role } = props;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={
            role !== "provider"
              ? require("../../../../assets/image/unknown.png")
              : null
          }
          style={styles.patientImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Title>{name}</Title>
          <Caption>{description}</Caption>
        </View>
        <View style={styles.buttonContainer}>
          {role !== "provider" ? (
            <Button
              mode={"contained"}
              size={"extra-small"}
              rippleColor={"lightGrey"}
              onPress={onPress}
            >
              {"انتخاب دکتر"}
            </Button>
          ) : null}
        </View>
      </View>
    </View>
  );
}

export const Card = observer(CardComponent);
