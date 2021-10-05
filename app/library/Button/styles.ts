import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import memoize from "fast-memoize";
import { THEME } from "../theme";
import { tMode, IButtonStyles, tSize, } from "./types";

export const activityStyles = StyleSheet.create({
  container: {
    transform: [{ scale: 0.8 }],
  },
});

export function activityStyleGen(mode: tMode) {
  const activityColor = mode === "contained" ? "white" : THEME.COLORS.PRIMARY.NORMAL;
  return { activityColor, styles: activityStyles };
}


function buttonHeightCalc(size: tSize) {
  switch (size) {
    case "small":
      return 36;
    case "medium":
      return 38;
    case "big":
      return 44;
    default:
      return 36;
  }
}

function buttonMinWidthCalc(size: tSize) {
  switch (size) {
    case "small":
      return widthPercentageToDP("16%");
    case "medium":
      return widthPercentageToDP("48%");
    case "big":
      return widthPercentageToDP("90%");
    default:
      return widthPercentageToDP("16%");
  }
}

function buttonColor(dark: boolean | undefined, mode: tMode, color: string | undefined) {
  if (dark === undefined) {
    if (mode === "contained") {
      return "white";
    } else {
      return color ? color : THEME.COLORS.PRIMARY.NORMAL;
    }
  } else if (dark === false && mode === "contained") {
    return color ? color : "rgba(0,0,0,0.87)";
  } else {
    return color ? color : THEME.COLORS.PRIMARY.NORMAL;
  }
}


function buttonStyle(args: IButtonStyles) {
  const { mode,bold, size, dark, disabled, color, fullRadius } = args;
  
  const styles = StyleSheet.create({
    container: {
      minWidth: buttonMinWidthCalc(size),
      maxWidth: size === "big" ? widthPercentageToDP("86") : widthPercentageToDP("52"),
      height: buttonHeightCalc(size),
      borderWidth: mode === "outlined" ? StyleSheet.hairlineWidth : 0,
      backgroundColor:
        mode === "contained" ? THEME.COLORS.PRIMARY.NORMAL : "transparent",
      borderColor: disabled
        ? THEME.COLORS.GREY.NORMAL
        : color
        ? color
        : THEME.COLORS.PRIMARY.NORMAL,
      borderRadius: fullRadius ? buttonHeightCalc(size) / 2 : 4,
      flexDirection: "row-reverse",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 4,
      overflow: "hidden",
      elevation: mode === "contained" ? 2 : 0,
    },
    text: {
      fontSize: size === "big" ? 16 : 14,
      fontFamily: bold ? "Vazir-Bold-UI": "Vazir-Regular-UI",
      color: buttonColor(dark, mode, color),
      marginHorizontal: 4,
    },
    icon: {
      marginHorizontal: 1,
    },
  });
  const iconStyle = {
    size: size === "big" ? 22 : 16 ,
    color: buttonColor(dark, mode, color)
  };
  return { styles, iconStyle };
}

export const styleGen = memoize(buttonStyle);
