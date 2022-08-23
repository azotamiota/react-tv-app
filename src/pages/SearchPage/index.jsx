import React, {useState, useEffect} from "react"; 
import axios from "axios";

import {ShowCard, SearchForm, Header} from '../../components';

const SearchPage = () => {
    
    const [showData, setShowData] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const searchAPi = async () => {
            const result = await axios.get(`https://imdb-api.com/en/API/SearchMovie/k_xo6eyxth/${searchString}`) // k_xo6eyxth
            console.log('api result: ', result.data.results)
            // const movieID = await result.data
            setShowData(result.data.results)
            setIsLoading(false)
            // const movieIDs = result.data.results.map(movie => movie.id)
            // console.log('movieIDs: ', movieIDs);
            // const movieTrailerLinks = movieIDs.map(movieID => {
            //     // console.log('movieID: ', movieID)
            //     async function (movieID) {
            //        return await axios.get(`https://imdb-api.com/API/Trailer/k_xo6eyxth/${movieID}`)
            //     }
            // })
            // console.log('movieTRalertrailer: ',movieTrailerLinks);
        }


        searchAPi();

    }, [searchString]);

    function handleSearch(userInput) {
        setSearchString(userInput)
    }

   

    return <>
        <Header />
        <SearchForm handleSearchSubmission={handleSearch}/>
        <div id="card-container">
        {!isLoading ? <em>Loading...</em> : showData && showData.map(show => <ShowCard key={show.id} data={show}/>)}
        </div>
    </>

}

export default SearchPage;
