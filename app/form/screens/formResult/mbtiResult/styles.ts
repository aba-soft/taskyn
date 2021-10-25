import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: widthPercentageToDP(100),
    height: 300,
    padding: 16,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  line:{
    width:widthPercentageToDP("80"),
    height:1,
    backgroundColor:THEME.COLORS.TRANSPARENT.PRIMARY,
  },
  answerContainer: {
    width: widthPercentageToDP(100),
    height: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionContainer: {
    width: widthPercentageToDP(100),
    height: 150,
    paddingHorizontal: widthPercentageToDP("5"),
  },
  progressBarContainer: {
    width: widthPercentageToDP(100),
    height: 400,
  },
  title:{
    width: widthPercentageToDP(100),
    height: 30,
    paddingHorizontal: widthPercentageToDP("5"),
  }
});
