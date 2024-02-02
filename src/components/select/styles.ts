import styled from "styled-components";

export const StyledSelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelect = styled.div<{
  $isOpen: boolean;
  $hasError: boolean;
}>`
  padding: 0.5rem;
  border-radius: 8px;
  border: ${(props) =>
    props.$hasError ? "1px solid red" : "1px solid #d5d5d5"};
  outline: none;
  width: 100%;
  color: #747474;
  position: relative;
  cursor: pointer;

  &::after {
    content: ">";
    position: absolute;
    top: 10%;
    right: 10px;
    transform: rotate(${(props) => (props.$isOpen ? "-90deg" : "90deg")});
    font-size: 20px;
    color: #747474;
  }
`;

export const CustomDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #d5d5d5;
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  z-index: 999;
`;

export const ErrorMessage = styled.h3`
  color: red;
  font-size: 12px;
  position: absolute;
  bottom: -18px;
`;

export const CustomOption = styled.div`
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
