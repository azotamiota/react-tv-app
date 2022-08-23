import React, {useState} from "react";

const SearchForm = ({handleSearchSubmission}) => {

    const [inputValue, setInputValue] = useState("")

    function handleInput(e) {
        const newInput = e.target.value;
        setInputValue(newInput)
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleSearchSubmission(inputValue)
    }

return <>
<form id='search-form' onSubmit={handleSubmit}>
    <label htmlFor="search-box">Find a movie / TV show</label><br></br>
            <input type='text' name='input-text' onChange={handleInput} value={inputValue} id='search-box' required/>
            <input type='submit' value='Go!'/>
        </form>
    </>

}

export default SearchForm
