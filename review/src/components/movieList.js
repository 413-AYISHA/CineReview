import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieList = (props) => {
    const navigate = useNavigate()
    return (
        <>
            {
                props.data.map((movie) => <div>
                    <img src={movie.Poster} alt='' onClick={() => {
                        navigate('/views', { state: movie })
                    }} />
                    <h4 style={{ color: 'white' }}>{movie.Title}</h4>
                </div>)
            }
        </>
    )
}

export default MovieList
