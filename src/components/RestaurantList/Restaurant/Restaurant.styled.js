import styled from 'styled-components';
import { color, space, layout } from 'styled-system';

export const RestaurantWrapper = styled.div`
  ${space}
  ${layout}
  ${color}
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0;
  padding-bottom: 0;
  .name__location h2,
  p {
    margin: 0;
  }
  .name__location p {
    color: #7e7e7e;
  }
`;
