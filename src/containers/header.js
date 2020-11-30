import React, { useEffect, useState } from 'react';
import { Filter, FilterInput, Header } from '../components';
import CheckBox from '../components/CheckBox';

const ratingOptions = [
  { label: '1', value: '1', checked: false },
  { label: '2', value: '2', checked: false },
  { label: '3', value: '3', checked: false },
  { label: '4', value: '4', checked: false },
  { label: '5', value: '5', checked: false },
];

export default function HeaderContainer({ data, setFilteredPlaces }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(ratingOptions);

  const handleCheckBox = (e, idx, option) => {
    const newOptions = [...options];
    newOptions[idx].checked = e.target.checked;
    console.log(option.checked && e.target.value);
    // filtered(option.checked && e.target.value);
    setOptions(newOptions);
  };
  console.log(options);

  const handleFilter = () => {
    let selected = [];
    let filteredResults = [];
    options.map((option) => {
      return option.checked ? selected.push(parseInt(option.value)) : null;
    });
    selected.map((select) => {
      const filtered = data.filter((el) => {
        let floorRating = Math.floor(el.rating);
        return el.rating == select || floorRating == select;
      });
      filteredResults.push(...filtered);
    });
    setFilteredPlaces(filteredResults);
    setIsOpen(false);
    // console.log(filteredResults);
    // console.log(selected);
  };

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
                  onChange={(e) => handleCheckBox(e, idx, option)}
                />
                <CheckBox checked={option.checked} />
                <span style={{ marginLeft: '8px' }}>{option.label}</span>
              </FilterInput.CheckboxLabel>
            </div>
          ))}
          <FilterInput.Button onClick={handleFilter}>Filter</FilterInput.Button>
        </FilterInput>
      )}
    </Header>
  );
}
