import React, {useState, useEffect} from "react"; 
import axios from "axios";

import ShowCard from './components/ShowCard'

import './App.css'

// const [showData, setShowData] = useState([{title: "Afterlife", description: "Lorem ipsum lorem ipsum", rating: 9.1},{title: "Black Mirror", description: "Lorem ipsum lorem ipsum", rating: 9.8},{title: "Walking dead", description: "Lorem ipsum lorem ipsum", rating: 8.2}])

const App = () => {
    
    const [showData, setShowData] = useState([]);

    useEffect(() => {

        const searchAPi = async () => {
            const result = await axios.get('https://api.tvmaze.com/search/shows?q=girls')
            setShowData(result.data)
        }

        searchAPi();

    }, [])

    // https://api.tvmaze.com/search/shows?q=girls


    return <>
        <form id='search-form'></form>
        {showData.map(show => <ShowCard key={show.show.id} data={show.show}/>)}
    </>

}

export default App;
