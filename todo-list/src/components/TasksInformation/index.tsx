import { Text, View } from "react-native"
import { styles } from "./styles"
import { IToDoStatus } from "../../screens/Home"

interface IToDoInformation {
  toDoStatus: IToDoStatus
}

export const TasksInformation = ({ toDoStatus }: IToDoInformation) => {
  return (
    <View style={styles.tasksInformationContainer}>
      <View style={styles.createdTasksContainer}>
        <Text style={styles.createdTasksText}> Criadas </Text>
        <Text style={styles.tasksNumber}> {toDoStatus.created} </Text>
      </View>
      <View style={styles.doneTasksContainer}>
        <Text style={styles.doneTasksText}> Concluídas </Text>
        <Text style={styles.tasksNumber}> {toDoStatus.done} </Text>
      </View>
    </View>
  )
}