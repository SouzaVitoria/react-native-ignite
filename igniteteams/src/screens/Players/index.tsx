import { useEffect, useState, useRef } from "react";
import { Alert, FlatList, Keyboard, TextInput } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { AppError } from "@utils/AppError";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { Loading } from "@components/Loading";


const initialTeams = [
  "Time A",
  "Time B"
]

type RouteParams = {
  group: string;
}

export const Players = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<string>("Time A")
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const navigation = useNavigation();
  const route = useRoute()
  const { group } = route.params as RouteParams
  const newPlayerNameInputRef = useRef<TextInput>(null);


  const groupRemove = async () => {
    try {
      await groupRemoveByName(group);
      navigation.navigate("groups");
    } catch (error) {
      console.log(error);
      Alert.alert("Remover Grupo", "Não foi posível remover o grupo");
    }
  }

  const handleGroupRemove = async () => {
    Alert.alert(
      "Remover",
      "Deseja remover a turma?",
      [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: () => groupRemove() }
      ]
    )
  }

  const handleAddPlayer = async () => {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("Nova pessoa", "Informe o nome da pessoa para adicionar.");
    }

    const newPlayer = {
      name: newPlayerName,
      team: selectedTeam,
    }

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();
      Keyboard.dismiss();
      setNewPlayerName("")

      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova pessoa", "Não foi possível adicionar.")
      }
    }
  }

  const handlePlayerRemove = async (playerName: string) => {
    try {
      Alert.alert("Remover pessoa", `Deseja remover ${playerName}`, [
        { text: "Não", style: "cancel" },
        {
          text: "Sim",
          onPress: async () => {
            await playerRemoveByGroup(playerName, group);
            fetchPlayersByTeam()
          }
        }
      ]);

    } catch (error) {
      console.log(error);
      Alert.alert("Remover pessoa", "Não foi possível remover essa pessoa.");
    }
  }

  const fetchPlayersByTeam = async () => {
    try {
      setIsLoading(false);

      const playersByTeam = await playersGetByGroupAndTeam(group, selectedTeam);
      setPlayers(playersByTeam)

    } catch (error) {
      console.log(error);
      Alert.alert("Pessoas", "Não foi possível carregar as pessoas do time selecionado.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [selectedTeam])

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={initialTeams}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === selectedTeam}
              onPress={() => setSelectedTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      {
        isLoading ? <Loading /> : (
          <FlatList
            data={players}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <PlayerCard
                name={item.name}
                onRemove={() => { handlePlayerRemove(item.name) }}
              />
            )}
            ListEmptyComponent={() => (
              <ListEmpty message="Não há player nesse time" />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              { paddingBottom: 100 },
              players.length === 0 && { flex: 1 }
            ]}

          />
        )
      }
      <Button
        title="Remover Turma"
        type="SECONDARY"
        onPress={handleGroupRemove}
      />
    </Container>
  )
}