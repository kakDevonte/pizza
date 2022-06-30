import React from 'react';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setSearchValue } from '../../redux/slices/filterSlice';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const { searchValue } = useSelector(selectFilter);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setValue('');
    dispatch(setSearchValue(''));
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <input
        ref={inputRef}
        className={styles.input}
        value={value}
        onChange={(event) => onChangeInput(event)}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <svg
          className={styles.clearIcon}
          onClick={onClickClear}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
