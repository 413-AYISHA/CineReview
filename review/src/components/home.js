import React, {  useState } from 'react'
import MoviesList from './movieList'
// import axios from 'axios';

function Homepage() {
    const [movies] = useState(
        [
            {
                "Title": "Indian 2",
                "Year": "2024",
                "Type": "movie",
                "Poster": "https://upload.wikimedia.org/wikipedia/en/6/6f/Indian_2_poster.jpg",
                "Trailer": "https://www.youtube.com/watch?v=Vt4R3-zXksY"
            },
            {
                "Title": "Maharaja",
                "Year": "2024",
                "Type": "movie",
                "Poster": "https://upload.wikimedia.org/wikipedia/en/8/82/Maharaja_2024_film_poster.jpg",
                "Trailer": "https://www.youtube.com/watch?v=UsW95hX8GTQ"
            },
            {
                "Title": "Garudan",
                "Year": "2024",
                "Type": "movie",
                "Poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/Garudan_2024_poster.jpg",
                "Trailer": "https://www.youtube.com/watch?v=B2yC1jpAYvQ"
            },
            {
                "Title": "Thug Life",
                "Year": "2025",
                "Type": "movie",
                "Poster": "https://upload.wikimedia.org/wikipedia/en/0/0b/Thug_Life_%28upcoming_film%29.jpg",
            },
            {
                "Title": "Amaran",
                "Year": "2024",
                "Type": "movie",
                "Poster": "https://upload.wikimedia.org/wikipedia/en/5/54/Amaran_2024_poster.jpg",
                "Trailer": "https://www.youtube.com/watch?v=YkFaDqi2ueM"
            },
            {
                "Title": "The Greatest of All Time",
                "Year": "2024",
                "Type": "movie",
                "Poster": "https://upload.wikimedia.org/wikipedia/en/1/1e/The_Greatest_of_All_Time.jpg",
            },
            {
                "Title": "Good Bad Ugly",
                "Year": "2024",
                "Type": "movie",
                "Poster": "https://upload.wikimedia.org/wikipedia/en/8/83/Good_Bad_Ugly_poster.jpg",
            },
            {
                "Title": "Kanguva",
                "Year": "2024",
                "Type": "movie",
                "Poster": "https://upload.wikimedia.org/wikipedia/en/e/e8/Kanguva_poster.jpg",
                "Trailer": "https://www.youtube.com/watch?v=ajnCMSC4VPo"
            },
            {
                "Title": "Aavesham",
                "Year": "2024",
                "Type": "movie",
                "Poster": "https://upload.wikimedia.org/wikipedia/en/d/d1/Aavesham.jpg",
                "Trailer": "https://www.youtube.com/watch?v=OsMqr3556F8"
            },
            {
                "Title": "Guruvayoor Ambalanadayil",
                "Year": "2024",
                "Type": "movie",
                "Poster": "https://upload.wikimedia.org/wikipedia/en/c/c8/Guruvayoor_Ambalanadayil.jpg",
                "Trailer": "https://www.youtube.com/watch?v=IEm9X8yvivk"
            }
        ]
    )

    

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', backgroundColor: 'black' }}>
            <MoviesList data={movies} />
        </div>
    )
}

export default Homepage
