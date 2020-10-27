import React from 'react';
import { HeaderWrapper } from './Header.styled';

export const Header = () => {
  return (
    <>
      <HeaderWrapper height="20vh" color="white" bg="primary" display="block">
        <img src="logo.svg" alt="" />
        <p>Add or Review restaurants near you</p>
      </HeaderWrapper>
    </>
  );
};
