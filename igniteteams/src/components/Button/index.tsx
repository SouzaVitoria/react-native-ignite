import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

interface IButton extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps;
}

export const Button = ({ title, type = "PRIMARY", ...rest }: IButton) => {
  return (
    <Container
      type={type}
      {...rest}
    >
      <Title> {title} </Title>
    </Container>
  )
}