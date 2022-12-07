import styled from "styled-components";

export const SButton = styled.button`
  border: 1px solid #665dc3;
  height: 2.5rem;
  outline: none;
  background: #665dc3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.5rem;
  padding: 0.5rem 1rem;
  margin: 1rem 0 0 0;
  border-radius: 4px;
  color: #ffffff;
  font-family: inherit;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 400;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
  cursor: pointer;
  svg {
    fill: #fff;
    transform: translateX(0);
    transition: transform 0.3s ease;
  }
  &:hover {
    background: #fff;
    color: #665dc3;
    svg {
      fill: #665dc3;
      transform: translateX(5px);
    }
  }
`;
