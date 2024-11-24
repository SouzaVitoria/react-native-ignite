import { Container, Subtitle, Title } from "./styles"

interface IHighlight {
  title: string
  subtitle: string
}

export const Highlight = ({ title, subtitle }: IHighlight) => {
  return (
    <Container>
      <Title> {title} </Title>
      <Subtitle> {subtitle} </Subtitle>
    </Container>
  )
}