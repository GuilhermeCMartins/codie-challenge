import styled from "styled-components";

interface FlexProps {
  $justifyContent: string;
  $alignItems: string;
  $marginTop?: string;
}

export const Container = styled.div`
  font-size: 14px;
  font-weight: 400;
  font-variant: small-caps;
  width: 60%;
  height: 100%;
  margin: 0 auto;
`;

export const Body = styled.div`
  font-size: 14px;
  font-weight: 400;
  font-variant: small-caps;
  width: 60%;
  height: 100%;
  margin: 2rem auto;
`;

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  margin-top: ${(props) => props.$marginTop};
  gap: 1rem;
`;

export const Title = styled.h3`
  font-size: 14px;
  color: black;
`;

export const Subtitle = styled.h4`
  font-size: 16px;
  color: grey;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-top: 2rem;
`;

export const OutlinedButton = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  padding: 0.5rem 0rem 0.5rem 0.75rem;
  font-weight: bold;
  border-radius: 30px;
  border: 1px solid black;
  background-color: white;
  width: 50%;
  position: relative;
  margin-top: 2rem;
  text-align: left;

  &::after {
    content: "+";
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
`;

export const SubmitButton = styled.button`
  border: none;
  padding: 0.5rem;
  font-weight: bold;
  border-radius: 30px;
  background-color: #e40f0f;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d5d5d5;
  margin: 2rem 0;
`;

export const Summary = styled.div`
  h3 {
    font-size: 14px;
    color: #747474;
    font-weight: 400;
  }

  h4 {
    font-size: 8px;
    color: #747474;
    font-weight: 400;
  }

  h2 {
    font-weight: 600;
    line-height: 30px;
    font: 24px;
  }
`;
