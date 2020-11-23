import React, { useContext, useState } from 'react';
import { Filter, FilterInput, Header } from '../components';
import CheckBox from '../components/CheckBox';
import { optionsContext } from '../contexts/optionsContext';

export default function HeaderContainer() {
  const [isOpen, setIsOpen] = useState(false);

  //   const ratingOptions = [
  //     { label: '1', value: '1', checked: false },
  //     { label: '2', value: '2', checked: true },
  //     { label: '3', value: '3', checked: false },
  //     { label: '4', value: '4', checked: false },
  //     { label: '5', value: '5', checked: false },
  //   ];

  const ratingOptions = useContext(optionsContext);
  //   console.log(myoptions);

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
