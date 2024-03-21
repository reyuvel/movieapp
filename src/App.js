import React, { useEffect } from "react";


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=906abc2c';


const App = ()=>{

    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
    }

    useEffect(()=>{

        searchMovies('spiderman');

    },[]) ;

    return (
        <h1>JESUS</h1>
    );
}

export default App;