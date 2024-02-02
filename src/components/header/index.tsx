import { useRouter } from "next/router";
import LogoButton from "../logo-button";
import { Container, InlineButton, OutlinedButton, Flex } from "./styles";

const Header = () => {
  const navigate = useRouter();
  return (
    <Container>
      <div>
        <LogoButton />
      </div>
      <Flex>
        <InlineButton onClick={() => navigate.push("/about")}>
          Quem Somos
        </InlineButton>
        <OutlinedButton onClick={() => navigate.push("/schedule")}>
          Agendar Consulta
        </OutlinedButton>
      </Flex>
    </Container>
  );
};

export default Header;
