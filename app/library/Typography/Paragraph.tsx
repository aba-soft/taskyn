import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react-lite";
import { material } from "react-native-typography";

import { styles } from "./styles"
import { ITextProps } from "./types";

function ParagraphComponent(props: ITextProps) {
  const { children, style } = props;
  return (
    <Text {...props} style={[material.body1, styles.paragraph,style]}>
      {children}
    </Text>
  );
}

export const Paragraph = observer(ParagraphComponent);
