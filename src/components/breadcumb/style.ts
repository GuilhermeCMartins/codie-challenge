import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const BreadcumbLinkContainer = styled.div<{ $isCurrent: boolean }>`
  font-variant: all-small-caps;
  font-size: 15px;
  &::after {
    content: ${({ $isCurrent }) => ($isCurrent ? `" "` : `">"`)};
    color: white;
    margin-left: 5px;
    font-size: 10px;
    text-align: center;
  }

  &:hover {
    font-weight: bold;
  }
`;