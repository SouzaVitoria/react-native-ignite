import { useState } from 'react';

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

const initialParticipants = [
  'Vitória',
  'Danilo'
]

export default function Home() {
  const [participantList, setParticipantList] = useState<string[]>(initialParticipants)
  const [participantName, setParticipantName] = useState("")

  const hadleParticipantAdd = () => {
    if (participantList.includes(participantName)) {
      return Alert.alert("Participante existente", `${participantName}`)
    }

    Alert.alert("Adicionado", "Bem-vindo")
    setParticipantList(prevState => [...prevState, participantName])
    setParticipantName("")
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover", `Realmente deseja remover ${name}?`, [
      {
        text: "Sim",
        onPress: () => setParticipantList(prevState => prevState.filter(participant => participant !== name)),
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
          onChangeText={setParticipantName} // onChangeText={text => setParticipantName(text)}
          value={participantName}
        />
        <TouchableOpacity onPress={hadleParticipantAdd} style={styles.button}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participantList}
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