import styled from "styled-components";

export const Container = styled.div`
  font-size: 14px;
  font-weight: 400;
  font-variant: small-caps;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;

export const Box = styled.div`
  border: 1px solid #df8686;
  background-color: #df86860a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  width: 30%;
  height: 40%;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #1d1d1d;
`;

export const Subtitle = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: #747474;
  text-align: center;
  width: 70%;
`;

export const RestartButton = styled.button`
  border: none;
  padding: 0.5rem;
  font-weight: bold;
  border-radius: 30px;
  background-color: #e40f0f;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;
