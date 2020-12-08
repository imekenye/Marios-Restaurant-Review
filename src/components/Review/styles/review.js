import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
`;
export const Header = styled.div`
  position: fixed;
  top: 106px;
  left: 50%;
  width: 100%;
  margin-bottom: 36px;
  background: #fcfcfc;
  padding: 30px 76px;
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
  padding-top: 200px;
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
