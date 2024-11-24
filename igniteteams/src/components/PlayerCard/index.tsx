import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles";

interface IPlayerCard {
  name: string;
  onRemove: () => void;
}

export const PlayerCard = ({ name, onRemove }: IPlayerCard) => {
  return (
    <Container>
      <Icon name="person" />
      <Name> {name} </Name>
      <ButtonIcon
        icon="close"
        type="SECONDARY"
        onPress={onRemove}
      />
    </Container>
  );
}