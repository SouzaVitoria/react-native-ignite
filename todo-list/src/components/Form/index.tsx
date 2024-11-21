import {
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { styles } from "./styles"

interface IForm {
  onAdd: () => void
  onSetAdd: () => void
  toDo: string
}

export const Form = ({ onAdd, toDo, onSetAdd }: IForm) => {
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={toDo}
        onChangeText={onSetAdd}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onAdd}
      >
        <Image source={require('../../../assets/plus.png')} />
      </TouchableOpacity>
    </View>
  )
}