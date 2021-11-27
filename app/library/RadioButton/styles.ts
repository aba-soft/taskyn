import { StyleSheet } from "react-native";
import memoize from "fast-memoize";
import { THEME } from "../theme";
import { IRadioButtonStyles } from "./types";
function styleGenerator(args: IRadioButtonStyles) {
  const { checked, size } = args;

  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
    },
    activeContainer: {
      borderColor: THEME.COLORS.PRIMARY.NORMAL,
    },
    deActiveContainer: {
      borderColor: THEME.COLORS.GREY.LIGHT,
    },
    dot: {
      width: size - Math.floor(size / 4),
      height: size - Math.floor(size / 4),
      borderRadius: (size - Math.floor(size / 4)) / 2,
    },
    activeDot: {
      backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
    },
    deActiveDot: {
      backgroundColor: THEME.COLORS.GREY.NORMAL,
    },
  });
  const containerStyle = [
    styles.container,
    checked ? styles.activeContainer : styles.deActiveContainer,
  ];
  const dotStyle = [
    styles.dot,
    checked ? styles.activeDot : styles.deActiveDot,
  ];
  return {
    containerStyle,
    dotStyle,
  };
}

export const styleGen = memoize(styleGenerator);
