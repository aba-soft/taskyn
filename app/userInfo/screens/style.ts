import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../library";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputContainer: {
    padding: 15,
  },
});
