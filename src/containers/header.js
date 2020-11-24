import React, { useContext, useState } from 'react';
import { Filter, FilterInput, Header } from '../components';
import CheckBox from '../components/CheckBox';
import { optionsContext } from '../contexts/optionsContext';

export default function HeaderContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const ratingOptions = useContext(optionsContext);
  const [options, setOptions] = useState(ratingOptions);

  return (
    <Header>
      <Header.Logo src={'logo.svg'} />
      <Header.Title>Find and add restaurants near you.</Header.Title>
      <Filter>
        <Filter.Title>Filter by rating</Filter.Title>
        <Filter.Icon
          src={'filterIcon.svg'}
          onClick={() => setIsOpen((prevState) => !prevState)}
        />
      </Filter>
      {isOpen && (
        <FilterInput>
          {options.map((option, idx) => (
            <div className="filter__input" key={idx}>
              <FilterInput.CheckboxLabel>
                <FilterInput.Checkbox
                  type="checkbox"
                  value={option.value}
                  checked={option.checked}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[idx].checked = e.target.checked;
                    console.log(option.checked && e.target.value);
                    setOptions(newOptions);
                  }}
                />
                <CheckBox checked={option.checked} />
                <span style={{ marginLeft: '8px' }}>{option.label}</span>
              </FilterInput.CheckboxLabel>
            </div>
          ))}
          <FilterInput.Button>Filter</FilterInput.Button>
        </FilterInput>
      )}
    </Header>
  );
}
