import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import { styles } from './styles'
import { Participant } from '../../components/Participant';

export default function Home() {
  const participants = [
    'Vitória',
    'Danilo',
    'Leila',
    'Marcos',
    'Maria',
    'Jair',
    'Benedita',
    'Leandro'
  ]

  const hadleParticipantAdd = () => {
    if (participants.includes("Vitória")) {
      return Alert.alert("Participante existente", "Esse participante já foi cadastrado")
    }

    Alert.alert("Adicionado", "Bem-vindo")
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover", `Realmente deseja remover ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
        style: 'destructive'
      },
      {
        text: "Não",
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Digite aqui"
          style={styles.input}
          placeholderTextColor={"#6B6B6B"}

        />
        <TouchableOpacity onPress={hadleParticipantAdd} style={styles.button}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyParticipant}>
            Nenhum participante chegou, então não temos cadastro.
          </Text>
        )}
      />
    </View>
  );
}