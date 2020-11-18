import React from 'react';
import { Container } from './styles/main';

export default function Main({ children, ...rest }) {
  return <Container>{children}</Container>;
}
