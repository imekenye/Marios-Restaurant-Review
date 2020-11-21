import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 22px;

  .restaurant__image {
    height: 96px;
    width: 100%;
    flex: 1;
    overflow: hidden;
  }
  .restaurant__details {
    flex: 2;
  }
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
export const Title = styled.h2`
  font-family: 'AkkuratBold', sans-serif;
  font-size: 26px;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-smooth: auto;
`;
export const Location = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;
export const Rating = styled.div`
  padding-top: 16px;
`;
