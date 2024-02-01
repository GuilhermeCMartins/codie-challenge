import styled from "styled-components";

export const Name = styled.h3`
  color: black;
  font-size: 16px;
  font-weight: 900;
  font-variant: small-caps;
`;

export const Container = styled.div`
  color: #eeeeee;
  font-size: 14px;
  font-weight: 400;
  font-variant: small-caps;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  border-color: #d5d5d5;
  border: 1px solid #d5d5d5;
  outline: none;
  width: 200px;

  :active {
    border: none;
    border-color: #d5d5d5;
  }

  ::placeholder {
    color: #747474;
  }
`;
