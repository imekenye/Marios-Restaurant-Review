import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 76px 76px 0px 76px;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.05);
  overflow: scroll;

  span.back__form {
    svg {
      margin-right: 8px;
    }
    font-family: 'AkkuratBold', sans-serif;
    font-size: 16px;
    font-weight: normal;
    color: lightgray;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: gray;
    }
  }
`;
