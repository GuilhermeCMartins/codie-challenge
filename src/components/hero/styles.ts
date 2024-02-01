import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  height: 82vh;
  align-items: center;
  justify-content: center;
  background-size: 100%;
  background-image: url("/images/pokemon-hero.jpg");
  background-position: bottom;
  background-repeat: no-repeat;
`;

export const Caption = styled.p`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 500px;
`;