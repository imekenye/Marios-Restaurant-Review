import { createContext } from 'react';

const ratingOptions = [
  { label: '1', value: '1', checked: false },
  { label: '2', value: '2', checked: true },
  { label: '3', value: '3', checked: false },
  { label: '4', value: '4', checked: false },
  { label: '5', value: '5', checked: false },
];

export const optionsContext = createContext(ratingOptions);
