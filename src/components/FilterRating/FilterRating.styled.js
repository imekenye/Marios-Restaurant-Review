import styled from 'styled-components';
import { color } from 'styled-system';
import { motion } from 'framer-motion';

export const FilterRatingWrapper = styled.div`
  position: absolute;
  top: 60px;
  width: 100%;
  z-index: 10;
  ${color}
`;
export const FilterContainer = styled.div`
  width: 447px;
  height: 84px;
  margin: 0 auto;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 26px;
  ${color}
  span {
    color: white;
  }
  p.filterbyrating {
    font-size: 18px;
    color: white;
  }
`;

export const Button = styled.button`
  width: 73px;
  height: 36px;
  border: none;
  outline: none;
  border-radius: 8px;
  ${color}
`;

export const RatingBar = styled(motion.div)`
  width: 80px;
  height: 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  ${color}
`;

export const Rate = styled(motion.div)`
  width: 22px;
  height: 22px;
  border-radius: 30px;
  background: white;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  text-align: center;
  padding-top: 1px;
`;
