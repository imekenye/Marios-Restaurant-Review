import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
`;
export const Header = styled.div`
  width: 100%;
  margin-bottom: 36px;

  @media (min-width: 481px) and (max-width: 768px) {
    position: relative;
    padding: 0;
  }
  @media (min-width: 360px) and (max-width: 480px) {
    padding: 0;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0;
  }

  .back {
    svg {
      margin-right: 8px;
    }
    font-family: 'Akkurat';
    color: lightgray;
    font-weight: normal;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding-bottom: 16px;
    &:hover {
      color: gray;
    }
  }
`;
export const Button = styled.button`
  width: 96px;
  height: 36px;
  border: none;
  color: #454444;
  background: #f5d8bf;
  margin-top: 16px;

  a {
    text-decoration: none;
  }
`;
export const Body = styled.div`
  padding-top: 20px;
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 0;
  }
  @media (min-width: 360px) and (max-width: 480px) {
    padding-top: 0px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    padding-top: 0;
  }
`;
export const Title = styled.h2`
  font-weight: bold;
  color: #454444;
  font-size: 18px;
`;
export const Rating = styled.div``;
export const Text = styled.p`
  font-size: 14px;
  color: rgba(69, 68, 68, 0.7);
`;
