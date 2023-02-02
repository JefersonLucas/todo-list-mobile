import { Image, Text, View } from "react-native";
import clipboard from "../../assets/img/clipboard.png";
import { styles } from "./styles";

export function Empty() {
  return (
    <View style={styles.emptyContainer}>
      <Image source={clipboard} style={styles.clipboard} />
      <Text style={styles.firstText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.secondText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
