import React from 'react';
import { Container, Checkbox, CheckboxLabel } from './styles/filterinput';

export default function FilterInput({ children, ...rest }) {
  return <Container>{children}</Container>;
}

FilterInput.Checkbox = function FilterInputCheckbox({ children, ...rest }) {
  return <Checkbox {...rest}>{children}</Checkbox>;
};

FilterInput.CheckboxLabel = function FilterInputCheckboxLabel({ ...rest }) {
  return <CheckboxLabel {...rest}>{children}</CheckboxLabel>;
};
