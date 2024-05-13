import React from "react";
import StatusFilter from "../StatusFilter";
import "./index.css";

const SearchBar = () => {
    const sarchText = 'Type here to search';
    
    return (
        <div className={"search-bar"}>
            <input 
                placeholder={sarchText}
                className={'search-input'}
                style={{}}
            />
            <StatusFilter />
        </div>
    );
}

export default SearchBar;