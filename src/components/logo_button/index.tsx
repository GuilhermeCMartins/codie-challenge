import React, { useState } from "react";
import { ExpandeableButton, Text } from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";

const LogoButton: React.FC = () => {
  const [isExpanded, setExpanded] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);
  const [animation, setAnimation] = useState(true);
  const navigate = useRouter();

  return (
    <ExpandeableButton
      $isExpanded={isExpanded}
      onAnimationStart={() => setIsAnimating(false)}
      onAnimationEnd={() => {
        setExpanded(!isExpanded);
        setIsAnimating(!animation);
      }}
      onMouseEnter={() => setAnimation(false)}
      onMouseLeave={() => setTimeout(() => setAnimation(true), 2000)}
      $animate={animation}
      onClick={() => navigate.push("/")}
    >
      <Image
        src="/images/white-pokeball.svg"
        alt="logo"
        width={40}
        height={40}
      />
      <Text
        style={{
          display: isAnimating ? "block" : "none",
          fontVariant: "small-caps",
        }}
      >
        Centro Pokémon
      </Text>
    </ExpandeableButton>
  );
};

export default LogoButton;
