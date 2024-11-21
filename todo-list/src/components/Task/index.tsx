import { Image, Text, View, TouchableOpacity } from "react-native"
import { IToDoList } from "../../screens/Home"
import { styles } from "./styles"

interface IToDo extends IToDoList {
  onRemove: (id: string) => void
  onUpdateStatus: (id: string) => void
}

export const Task = ({ id, todo, done, onRemove, onUpdateStatus }: IToDo) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        style={styles.todoButton}
        onPress={() => onUpdateStatus(id)}
      >
        {
          done ? (
            <Image
              source={require('../../../assets/todo-done.png')}
              style={styles.status}
            />
          ) : (
            <Image
              source={require('../../../assets/todo.png')}
              style={styles.status}
            />
          )
        }

        <Text style={!done ? styles.taskText : styles.taskTextDone}>
          {todo}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onRemove(id)}>
        <Image source={require('../../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  )
}