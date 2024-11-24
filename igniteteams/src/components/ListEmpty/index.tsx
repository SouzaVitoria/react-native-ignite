import { Container, Message } from "./styles"

interface IMessage {
  message: string
}

export const ListEmpty = ({ message }: IMessage) => {
  return (
    <Container>
      <Message> {message} </Message>
    </Container>
  )
}