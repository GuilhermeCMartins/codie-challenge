import React from "react";
import { Caption, HeroContainer } from "./styles";

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <Caption style={{ fontVariant: "small-caps" }}>
        Cuidamos bem do seu pokémon, para ele cuidar bem de você
      </Caption>
    </HeroContainer>
  );
};

export default Hero;
