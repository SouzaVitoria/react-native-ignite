import { useEffect, useState } from "react"
import { FlatList, View, Alert } from "react-native"
import { TasksInformation } from "../../components/TasksInformation"
import { Form } from "../../components/Form"
import { EmptyTasks } from "../../components/EmptyTasks"
import { Task } from "../../components/Task"
import { styles } from "./styles"

export interface IToDoList {
  id: string
  todo: string
  done: boolean
}

export interface IToDoStatus {
  created: number
  done: number
}

const toDoListDefault: IToDoList[] = [
  {
    id: "1456",
    todo: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    done: false
  },
  {
    id: "245",
    todo: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    done: true
  },
  {
    id: "3548",
    todo: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    done: false
  }
]

export const Home = () => {
  const [toDoList, setToDoList] = useState<IToDoList[]>(toDoListDefault)
  const [toDoInput, setToDoInput] = useState("")
  const [toDoStatus, setToDoStatus] = useState({})

  useEffect(() => {
    const countStatus = toDoList.reduce((counts, todo) => {
      todo.done ? counts.doneToDo++ : counts.createdToDo++
      return counts;
    },

      { createdToDo: 0, doneToDo: 0 }
    );

    setToDoStatus({
      created: countStatus.createdToDo,
      done: countStatus.doneToDo
    })

  }, [toDoList])


  const handleAddToDo = () => {
    setToDoList(prevState => [...prevState, {
      id: `${Math.random()}`,
      todo: toDoInput,
      done: false
    }])
    setToDoInput("")
  }

  const handleRemoveToDo = (toDoId: string) => {
    Alert.alert("Excluir", "Realmente deseja excluir esse To Do?", [
      {
        text: "Sim",
        onPress: () => setToDoList(toDoList.filter(toDo => toDo.id !== toDoId))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])

  }

  const handleUpdateToDoStatus = (toDoId: string) => {
    const updatedList = toDoList.map((todo) => {
      if (todo.id === toDoId) {
        return { ...todo, done: !todo.done }
      }
      return todo
    })

    setToDoList(updatedList);
  }


  return (
    <View style={styles.container}>
      <Form
        onAdd={handleAddToDo}
        onSetAdd={setToDoInput}
        toDo={toDoInput}
      />
      <TasksInformation toDoStatus={toDoStatus} />
      <FlatList
        data={toDoList}
        renderItem={({ item }) => (
          <Task
            id={item.id}
            todo={item.todo}
            done={item.done}
            onUpdateStatus={() => handleUpdateToDoStatus(item.id)}
            onRemove={() => handleRemoveToDo(item.id)}
          />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => <EmptyTasks />}
      />
    </View>
  )
}