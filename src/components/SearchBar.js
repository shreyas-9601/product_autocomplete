import React, { useState, useEffect } from "react";

function SearchBar({ onSearch, productData }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(productData);
  }, [productData]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filteredSuggestions = productData.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSearch = () => {
    const matchingProducts = productData.filter(
      (product) => product.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    onSearch(matchingProducts);
  };
                  
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Product Name"
        value={inputValue}
        onChange={handleInputChange}
        list="datalistOptions"
      />

      <datalist id="datalistOptions">
        {suggestions.map((product) => (
          <option key={product.id} value={product.name} />
        ))}
      </datalist>

      <button 
        onClick={handleSearch}
      >
      Search
      </button>
    </div>
  );
}

export default SearchBar;