import styled from 'styled-components/macro';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  height: 100%;
  padding: 16px 76px;
`;
export const Title = styled.h2`
  font-size: 18px;
  margin: 0;
`;
export const Rating = styled.div`
  display: flex;
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
export const FirstName = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  outline: none;
  background: #f5f8f9;

  &::placeholder {
    color: rgba(69, 68, 68, 0.5);
    font-size: 12px;
    padding-left: 16px;
  }
`;
export const LastName = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  outline: none;
  background: #f5f8f9;

  &::placeholder {
    color: rgba(69, 68, 68, 0.5);
    font-size: 12px;
    padding-left: 16px;
  }
`;
export const Review = styled.textarea`
  width: 100%;
  height: 120px;
  border: none;
  outline: none;
  background: #f5f8f9;

  &::placeholder {
    color: rgba(69, 68, 68, 0.5);
    font-size: 12px;
    padding-left: 16px;
  }
`;
