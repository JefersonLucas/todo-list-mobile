import { MaterialCommunityIcons } from "@expo/vector-icons";

type IconProps = {
  name:
    | "plus"
    | "playlist-plus"
    | "playlist-check"
    | "checkbox-marked-circle-outline"
    | "checkbox-blank-circle-outline"
    | "trash-can-outline";
  color: string;
  size: number;
};

export function Icon(props: IconProps) {
  return <MaterialCommunityIcons {...props} />;
}
