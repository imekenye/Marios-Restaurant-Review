import styled from 'styled-components/macro';

export const Container = styled.div`
  position: absolute;
  right: 70px;
  top: 92px;

  /* height: 192px; */
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 20;

  .filter__input {
    display: flex;
  }
`;
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  margin-right: 8px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-bottom: 8px;
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 4px;
  padding: 8px 0;
  cursor: pointer;
`;
