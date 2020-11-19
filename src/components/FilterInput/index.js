import React from 'react';
import { Container, Checkbox, CheckboxLabel } from './styles/filterinput';

export default function FilterInput({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

FilterInput.Checkbox = function FilterInputCheckbox({ children, ...rest }) {
  return <Checkbox {...rest}>{children}</Checkbox>;
};

FilterInput.CheckboxLabel = function FilterInputCheckboxLabel({
  children,
  ...rest
}) {
  return <CheckboxLabel {...rest}>{children}</CheckboxLabel>;
};
