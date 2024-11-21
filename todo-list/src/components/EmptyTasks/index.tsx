import { Image, Text, View } from "react-native"
import { styles } from "./styles"

export const EmptyTasks = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/clipboard.png')}/>
      <Text style={styles.emptyTaskMessageBold}> Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.emptyTaskMessage}> Crie tarefas e organize seus itens a fazer </Text>
    </View>
  )
}