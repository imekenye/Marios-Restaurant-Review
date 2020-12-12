import styled from 'styled-components/macro';

export const Container = styled.form`
  position: absolute;
  top: 20%;
  right: 20%;
  bottom: 20%;
  left: 20%;
  z-index: 12;
  background: #fff;
  padding: 60px;
  filter: drop-shadow(20px 25px 20px rgba(0, 0, 0, 0.1));
  @media (min-width: 360px) and (max-width: 480px) {
    padding: 60px 16px 0px 16px;
    top: 30%;
    right: 10%;
    left: 10%;
    height: 50%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 150px 56px 0px 56px;
    top: 30%;
    right: 10%;
    left: 10%;
    height: 500px;
  }
`;
export const Name = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  border: none;
  outline: none;
  background: #f5f8f9;
  margin-bottom: 16px;

  &::placeholder {
    color: rgba(69, 68, 68, 0.5);
    font-size: 12px;
    padding-left: 16px;
  }
`;
export const Location = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  border: none;
  outline: none;
  background: #f5f8f9;
  margin-bottom: 16px;

  &::placeholder {
    color: rgba(69, 68, 68, 0.5);
    font-size: 12px;
    padding-left: 16px;
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 36px;
  background: #454444;
  color: #ffe455;
  font-size: 12px;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
`;
