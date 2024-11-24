import { useState } from "react";
import { FlatList } from 'react-native'
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

const initialTeams = [
  "Time A",
  "Time B"
]

const initialPlayers = [
  "Player A",
  "Player B",
  "Player C"
]

export const Players = () => {
  const [selectedTeam, setSelectedTeam] = useState<string>("Time A")
  const [players, setPlayers] = useState<string[]>(initialPlayers)

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
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

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => { }}
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
      
      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  )
}