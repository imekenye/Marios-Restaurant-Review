import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const Title = styled.div`
  margin-right: 8px;
  @media (min-width: 360px) and (max-width: 480px) {
    display: none;
  }
`;
export const Icon = styled.img`
  @media (min-width: 360px) and (max-width: 480px) {
    height: 30px;
  }
  cursor: pointer;
`;
