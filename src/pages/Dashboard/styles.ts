import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 70;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 400px;
  line-height: 40px;
  font-weight: bold;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 715px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 10px 0 0 10px;
    background-color: #ffffff;
    color: #818181;
    border: 2px solid #ffffff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c6226f;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border: 0;
    border-radius: 0 10px 10px 0;
    background: #04d361;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.3, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  color: #c6226f;
  display: block;
  margin-top: 6px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 10px;
    width: 100%;
    padding: 18px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.3s;

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      transition: 0.4s border-radius;
    }

    div {
      flex: 1;
      margin-left: 16px;
      align-items: left;
      margin-right: 20px;
      strong {
        font-size: 20px;
        color: #3d3d4d;
        transition: 0.4s color;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
        transition: 0.4s color;
      }
    }

    svg {
      margin-left: auto;
      color: #a8afb9;
      transition: 0.4s color;
    }

    &:hover {
      transform: translateX(10px);
      svg {
        color: #3d3d4d;
      }

      img {
        border-radius: 10px;
      }

      strong {
        color: ${shade(0.8, '#3d3d4d')};
      }

      p {
        color: ${shade(0.5, '#a8afb9')};
      }
    }
  }
`;
