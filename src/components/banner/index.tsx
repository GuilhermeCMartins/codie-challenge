import Breadcumb from "../breadcumb";
import { BannerContainer, Subtitle, Title } from "./styles";

const Banner = () => {
  return (
    <BannerContainer>
      <Breadcumb currentName={"Agendar Consulta"} />
      <Title>Agendar Consulta</Title>
      <Subtitle>Recupere seus pokémons em 5 segundos</Subtitle>
    </BannerContainer>
  );
};

export default Banner;
