import styled from "styled-components";

export const Name = styled.h3`
  color: black;
  font-size: 16px;
  font-weight: 900;
`;

export const Container = styled.div`
  color: #eeeeee;
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  position: relative;
`;

export const Input = styled.input<{ $isError: boolean }>`
  padding: 0.5rem;
  border-radius: 8px;
  border: ${(props) =>
    props.$isError ? "1px solid red" : "1px solid #d5d5d5"};
  outline: none;
  width: 100%;
  color: "#747474";

  :active {
    border: none;
    border-color: #d5d5d5;
  }

  ::placeholder {
    color: #747474;
  }
`;

export const ErrorMessage = styled.h3`
  color: red;
  font-size: 12px;
  position: absolute;
  bottom: -18px;
`;
