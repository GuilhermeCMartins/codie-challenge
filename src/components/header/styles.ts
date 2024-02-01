import styled from "styled-components";

export const OutlinedButton = styled.button`
  border: none;
  background-color: #e40f0f;
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 700;
  font-variant: small-caps
`;

export const InlineButton = styled.button`
  border: none;
  background-color: inherit;
  color: black;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 400;
  font-variant: small-caps
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 6rem;
  background-color: #fff;
  height: 10vh;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
