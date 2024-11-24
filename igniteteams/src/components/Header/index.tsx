import { Container, Logo, BackButton, BackIcon } from "./styles"
import logoImg from "@assets/logo.png"

interface IHeader {
  showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: IHeader) => {
  return (
    <Container>
      {
        showBackButton && (
          <BackButton>
            <BackIcon />
          </BackButton>
        )
      }

      <Logo source={logoImg} />
    </Container>
  )
}