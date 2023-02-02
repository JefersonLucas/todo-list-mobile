import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    backgroundColor: theme.colors.gray500,
    borderRadius: 8,
    marginVertical: 4,
    paddingHorizontal: 12,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: theme.colors.gray400,
  },
  textContainer: {
    width: "80%",
    marginHorizontal: 8,
    height: 40,
    alignContent: "center",
    justifyContent: "center",
  },
  textCreated: {
    fontSize: 14,
    color: theme.colors.gray100,
    textDecorationLine: "none",
  },
  textDone: {
    fontSize: 14,
    color: theme.colors.gray300,
    textDecorationLine: "line-through",
  },
});
