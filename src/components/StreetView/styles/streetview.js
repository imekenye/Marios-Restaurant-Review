import styled from 'styled-components/macro';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #efefef;
  @media (min-width: 481px) and (max-width: 768px) {
    height: 50%;
  }
  @media (min-width: 360px) and (max-width: 480px) {
    height: 50%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 50%;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
