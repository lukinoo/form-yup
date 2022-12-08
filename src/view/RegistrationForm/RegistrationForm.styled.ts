import styled from "styled-components";

export const SForm = styled.form`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 1.5rem 1.8rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  div {
    margin: 0.5rem 0;
    &:nth-child(1) {
      position: relative;
      img {
        position: absolute;
        width: 50px;
        height: 50px;
        top: 0;
        right: 0;
      }
    }
    label {
      margin-bottom: 0.4rem;
      display: inline-block;
    }
  }
`;
