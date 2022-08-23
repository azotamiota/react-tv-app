import React, {useState, useEffect} from "react"; 
import axios from "axios";

import {ShowCard, SearchForm} from './components';

import './App.css'

// const [showData, setShowData] = useState([{title: "Afterlife", description: "Lorem ipsum lorem ipsum", rating: 9.1},{title: "Black Mirror", description: "Lorem ipsum lorem ipsum", rating: 9.8},{title: "Walking dead", description: "Lorem ipsum lorem ipsum", rating: 8.2}])

const App = () => {
    
    const [showData, setShowData] = useState([]);
    const [searchString, setSearchString] = useState('');

    useEffect(() => {

        const searchAPi = async () => {
            const result = await axios.get(`https://imdb-api.com/en/API/SearchMovie/k_xo6eyxth/${searchString}`) // k_xo6eyxth
            console.log('api result: ', result.data.results)
            setShowData(result.data.results)
        }

        searchAPi();

    }, [searchString]);

    function handleSearch(userInput) {
        setSearchString(userInput)
        // console.log('Im a function passed as a prop');
        // console.log(searchString);
    }

   

    return <>
        <SearchForm handleSearchSubmission={handleSearch}/>
        <div id="card-container">
        {showData && showData.map(show => <ShowCard key={show.id} data={show}/>)}
        </div>
    </>

}

export default App;
