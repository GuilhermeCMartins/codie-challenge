import styled, { keyframes } from "styled-components";

export const ExpandAnimation = keyframes`
    0% { width: 62px; border-radius: 100% }
    1% { width: 65px; border-radius: 50px }
    100% { width: 260px; border-radius: 50px }
`;

export const RetractAnimation = keyframes`
  0% { width: 260px; border-radius: 50px }
  99% { width: 65px; border-radius: 50px }
  100% { width: 62px; border-radius: 100% }
`;

export interface ExpandeableButtonProps {
  $animate: boolean;
  $isExpanded: boolean;
}

export const ExpandeableButton = styled.button<ExpandeableButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: red;
  border: none;
  height: 62px;

  border-radius: ${({ $isExpanded }) => ($isExpanded ? "50px" : "100%")};
  width: ${({ $isExpanded }) => ($isExpanded ? "260px" : "62px")};

  animation-name: ${(props) =>
    props.$animate ? RetractAnimation : ExpandAnimation};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  animation-direction: normal;
`;

export const Text = styled.div`
  color: white;
  margin-left: 12px;
  color: #fff;

  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
