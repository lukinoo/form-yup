import styled from "styled-components";

export const SForm = styled.form`
  max-width: 360px;
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
    &:nth-child(4) {
      .password__wrapper {
        position: relative;
        input {
          padding-right: 3rem;
        }
        .show-password {
          position: absolute;
          width: 2.5rem;
          height: 2.8rem;
          padding: 0.5rem;
          line-height: 2.8rem;
          top: 0;
          right: 0;
          background: none;
          outline: none;
          border: none;
          cursor: pointer;
          &::before {
            content: "";
            position: absolute;
            width: 2.6rem;
            height: 2.6rem;
            top: 0;
            left: 0;
            border-radius: 50%;
            background: rgba(102, 93, 195, 0);
            transition: background 0.2s ease;
          }
          &:active {
            &::before {
              background: rgba(102, 93, 195, 0.6);
            }
          }
        }
      }
    }
    label {
      margin-bottom: 0.4rem;
      display: inline-block;
    }
  }
`;
