import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Container, RestartButton, Subtitle, Title } from "./styles";

interface FeedbackProps {
  message: string;
  isSucceeded: boolean;
}

const Body = ({ message, isSucceeded }: FeedbackProps) => {
  const router = useRouter();
  return (
    <Container>
      <Box>
        <Title>
          {isSucceeded
            ? "Consulta Agendada"
            : "Houve um problema no agendamento"}
        </Title>
        <Image
          alt="icon"
          src={isSucceeded ? "/check.svg" : "/warning.svg"}
          width={42}
          height={42}
        />
        <Subtitle>{message}</Subtitle>
        <RestartButton onClick={() => router.push("/schedule")}>
          Fazer Novo Agendamento
        </RestartButton>
      </Box>
    </Container>
  );
};

export default Body;
