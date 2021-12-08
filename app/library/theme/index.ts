import { widthPercentageToDP } from "react-native-responsive-screen";

const COLORS = {
  PRIMARY: {
    LIGHT: "#8783fd",
    NORMAL: "#5256c9",
    DARK: "#082d97",
  },
  SECONDARY: {
    LIGHT: "#80b4ff",
    NORMAL: "#4285f4",
    DARK: "#0059c1",
  },
  TRANSPARENT: {
    PRIMARY: "rgba(82, 86, 201, 0.2)",
    INPUT_SELECTION: "rgba(82, 86, 201, 0.7)",
    GREY: "rgba(112,112,112,0.2)",
    WHITE: "rgba(255,255,255, 0.6)",
  },
  GREY: {
    LIGHT: "#cfcfcf",
    NORMAL: "#9e9e9e",
    DARK: "#707070",
  },
  DISABLED: {
    TEXT: "#CECCCC",
    BACKGROUND: "#E5E5E5",
  },
  TEST: {
    GREEN: {
      NORMAL: "#00BF10",
      DARK: "#008A0D",
    },
    GRAS: {
      NORMAL: "#8DD100",
      DARK: "#6E9E00",
    },
    YELLOW: {
      NORMAL: "#FFCE00",
      DARK: "#FF9800",
    },
    RED: {
      NORMAL: "#FF3200",
      DARK: "#D50000",
    },
    PURPLE: "#A55CB6",
    ORANGE: "#FEA92C",
    HIGHLIGHT: "#61FE4A",
    PINK: "#FF6EC9",
    BLUE: "#6A83DD",
  },
  ERROR: "#b71c1c",
  RED: {
    LIGHT: "#E7D9D8",
    NORMAL: "#DB2D1E",
  },
  GREEN: "#34A853",
  BACKGROUND: "#f5f5f5",
};

const FONTS = {
  LIGHT: "Vazir-Light-UI",
  THIN: "Vazir-Thin-UI",
  REGULAR: "Vazir-Regular-UI",
  MEDIUM: "Vazir-Medium-UI",
  BOLD: "Vazir-Bold-UI",
  BLACK: "Vazir-Black-UI",
};

const WIDTH = {
  BIG: widthPercentageToDP(90),
};

export const THEME = {
  COLORS,
  FONTS,
  WIDTH,
};
