import React, { memo, useRef } from "react";
import styles from './search_header.module.css';


const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  }
  return (
    <header>
      <div>
        <h1>하방</h1>
      </div>
      <input
        className ={styles.searchbox}
        ref={inputRef}
        type="search"
        placeholder="검색어를 입력하세요."
        onChange={handleChange}
        onKeyPress={onKeyPress}
        
      />
      <button type="submit" onClick={onClick} className= {styles.searchbtn}>
        검색
      </button>
    </header>
  );
});

export default SearchHeader;
