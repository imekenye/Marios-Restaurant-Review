import { color, space, layout } from 'styled-system';
import styled from 'styled-components';

export const MapContainer = styled.div`
  /* position: relative;
  ${space}
  ${layout}
  ${color} */

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-column: 1/-1;
  }
`;
