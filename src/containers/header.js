import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, FilterInput, Header } from '../components';
import CheckBox from '../components/CheckBox';
import StarRating from '../components/StarRating';
import PlacesContext from '../context/places-context';
import logo from '../assets/logo.svg';
import filterIcon from '../assets/filterIcon.svg';

const ratingOptions = [
  { label: '1', value: '1', checked: false },
  { label: '2', value: '2', checked: false },
  { label: '3', value: '3', checked: false },
  { label: '4', value: '4', checked: false },
  { label: '5', value: '5', checked: false },
];

export default function HeaderContainer({ showRating = true, setIsFiltered }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(ratingOptions);
  const { places, filterPlaces } = useContext(PlacesContext);

  const handleCheckBox = (e, idx, option) => {
    const newOptions = [...options];
    newOptions[idx].checked = e.target.checked;
    setOptions(newOptions);
  };

  const handleFilter = () => {
    let selected = [];
    let filteredResults = [];
    options.map((option) => {
      return option.checked ? selected.push(parseInt(option.value)) : null;
    });
    // eslint-disable-next-line array-callback-return
    selected.map((select) => {
      const filtered = places.filter((el) => {
        let floorRating = Math.floor(el.rating);
        return el.rating === select || floorRating === select;
      });
      filteredResults.push(...filtered);
    });
    // setFilteredPlaces(filteredResults);
    filterPlaces(filteredResults);
    setIsOpen(false);
    setIsFiltered(true);
    // console.log(filteredResults);
    // console.log(selected);
  };

  return (
    <Header>
      <Link to="/">
        <Header.Logo src={logo} />
      </Link>
      {showRating ? (
        <>
          <Header.Title>Find and add restaurants near you.</Header.Title>
          <Filter>
            <Filter.Title>Filter by rating</Filter.Title>
            <Filter.Icon
              src={filterIcon}
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
                        handleCheckBox(e, idx, option);
                        console.log(e);
                      }}
                    />
                    <CheckBox checked={option.checked} />
                    <span style={{ margin: '0 8px' }}>{option.label}</span>
                    <StarRating total={idx + 1} disable={true} />
                  </FilterInput.CheckboxLabel>
                </div>
              ))}
              <FilterInput.Button onClick={handleFilter}>
                Filter
              </FilterInput.Button>
            </FilterInput>
          )}
        </>
      ) : (
        ''
      )}
    </Header>
  );
}
