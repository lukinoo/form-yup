import styled from "styled-components";

type TError = { isError?: string };

export const SLabel = styled.label<TError>`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ isError }) => {
    if (isError) {
      return "#e91b08";
    }

    return "#111";
  }};
`;
