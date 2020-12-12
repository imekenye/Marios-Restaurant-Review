import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 28px 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 360px) and (max-width: 480px) {
    padding: 16px 16px;
  }
`;
export const Logo = styled.img`
  @media (min-width: 360px) and (max-width: 480px) {
    height: 30px;
  }
`;
export const Title = styled.p`
  color: gray;
  @media (min-width: 481px) and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 360px) and (max-width: 480px) {
    display: none;
  }
`;
