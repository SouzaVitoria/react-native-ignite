import { TouchableOpacityProps } from "react-native"
import { Container, Icon, Title } from "./styles"

interface IGroupCard extends TouchableOpacityProps {
  title: string
}

export const GroupCard = ({ title, ...rest }: IGroupCard) => {
  return (
    <Container {...rest}>
      <Icon />
      <Title> {title} </Title>
    </Container>
  )
}