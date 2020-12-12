import styled from 'styled-components/macro';

export const Container = styled.main`
  display: flex;
  height: calc(100vh - 106px);
  margin: 0 auto;

  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 360px) and (max-width: 480px) {
    flex-direction: column;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
  }
`;
