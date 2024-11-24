import { useState } from "react";
import { FlatList } from "react-native";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Container } from "./styles";

const initialGroups = [
  "Nome da turma 1",
  "Nome da turma 2"
]

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>(initialGroups);

  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turmar"
      />
      <FlatList
        data={groups}
        keyExtractor={group => group}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />

      <Button title="Criar nova turma"/>
    </Container>
  );
}

