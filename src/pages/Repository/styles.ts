import styled, { css } from 'styled-components';

export const Header = styled.header`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #3a3a3a;
    transition: color 0.2s;
    &:hover {
      color: #666;
    }
  }
`;

export const RepositoryInfo = styled.div`
  display: block;
  align-items: center;
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
    img {
      width: 152px;
      height: 162px;
      border-radius: 50%;
    }
    div {
      margin-left: 20px;

      strong {
        color: #3d3d4d;
        font-size: 40px;
        font-weight: 700;
      }

      p {
        color: #a8a8b3;
        font-size: 20px;
      }
    }
  }

  ul {
    margin-top: 20px;
    display: flex;

    li {
      display: block;
      list-style: none;

      & + li {
        margin-left: 80px;
      }

      strong {
        color: #3d3d4d;
        font-size: 36px;
        font-weight: 700;
      }

      p {
        color: #a8a8b3;
        font-size: 20px;
      }
    }
  }
`;

export const IssuesList = styled.div`
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
    }
  }
`;
