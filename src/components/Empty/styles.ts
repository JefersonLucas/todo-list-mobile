import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopColor: theme.colors.gray400,
    borderEndColor: theme.colors.gray600,
    borderStartColor: theme.colors.gray600,
    borderBottomColor: theme.colors.gray600,
    borderWidth: 1,
  },
  clipboard: {
    marginBottom: 16,
  },
  firstText: {
    fontSize: 14,
    fontWeight: "bold",
    color: theme.colors.gray300,
  },
  secondText: {
    fontSize: 14,
    fontWeight: "400",
    color: theme.colors.gray300,
  },
});
