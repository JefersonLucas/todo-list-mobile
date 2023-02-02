import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray600,
  },
  tasksContainer: {
    flex: 1,
    marginTop: 55,
    marginHorizontal: 24,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  created: {
    color: theme.colors.blue,
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 4,
  },
  done: {
    color: theme.colors.purple,
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 4,
  },
  counterContainer: {
    backgroundColor: theme.colors.gray400,
    width: 25,
    height: 19,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  counterText: {
    color: theme.colors.gray200,
    fontSize: 12,
    fontWeight: "bold",
  },
  list: {
    marginTop: 20,
  },
});
