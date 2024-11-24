import { TouchableOpacityProps } from "react-native";
import { Container, Title, FilterStyleProps } from "./styles";

interface IFilter extends TouchableOpacityProps, FilterStyleProps {
  title: string;
}

export const Filter = ({ title, isActive = false, ...rest }: IFilter) => {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}