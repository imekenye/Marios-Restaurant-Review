import React from 'react';
import { Container } from './styles/map';

export default function Map({ children, ...rest }) {
  return <Container>{children}</Container>;
}
