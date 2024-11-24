import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";
import { groupsGetAll } from "@storage/group/groupsGetAll";
import { Container } from "./styles";

export const Groups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate("new");
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group })
  }

  const fetchGroups = async () => {
    try {
      setIsLoading(true);

      const data = await groupsGetAll();

      setGroups(data)
    } catch (error) {
      Alert.alert("Turmas", "Não foi possível carregar as turmas");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turmar"
      />

      {
        isLoading ? <Loading /> : (
          <FlatList
            data={groups}
            keyExtractor={group => group}
            renderItem={({ item }) => (
              <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
            )}
            ListEmptyComponent={() => (
              <ListEmpty message="Que tal cadastrar a primeira turma?" />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
          />
        )
      }

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}

