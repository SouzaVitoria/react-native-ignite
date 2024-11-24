import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import { Container, Icon } from "./styles";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

interface IButtonIcon extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStyleProps;
}

export const ButtonIcon = ({ icon, type = "PRIMARY", ...rest }: IButtonIcon) => {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}