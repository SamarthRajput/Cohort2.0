import axios from 'axios';
import React, { useEffect, useState } from 'react';

function useDebounce(value, timeout){
    //Anytime value changes start a clock for timeout milli seconds that will actually update the value 

    const [debouncedValue, setDebouncedValue] = useState(value);


    useEffect(() => {
        let timeoutNumber = setTimeout(() => {
        //and anytime the value changes set debounced value only after timeout milli seconds 
            setDebouncedValue(value);
        }, timeout)

        return () => {
            clearTimeout(timeoutNumber);
        }
        //anytime this value updates 
    } , [value])

    return debouncedValue;
}

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay
  
    // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect
    //To send the backend call for the debouncedValue
    // useEffect(() => {
    //     axios.get()
    // }, [debouncedValue]);
  
    return (
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    );
  };
  
  export default SearchBar;