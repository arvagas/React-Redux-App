import React from 'react'
import { useDispatch } from 'react-redux'

import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES
}
from '../actions'

const BrewCard = ({ brewery }) => {
    const dispatch = useDispatch()

    return (
        <div style={{border:'solid black 1px', padding:'10px', margin:'2rem'}}>
            <h1>{brewery.name}</h1>
            <p>Location: {brewery.street}, {brewery.city}, {brewery.state}</p>
            <p>Contact: {brewery.phone}</p>
            <p>Website: <a href={brewery.website_url}>{brewery.website_url}</a></p>
            <button onClick={() => dispatch({type: ADD_TO_FAVORITES, payload: brewery})}>Add to Favorites</button>
            <button onClick={() => dispatch({type: REMOVE_FROM_FAVORITES, payload: brewery})}>Remove from Favorites</button>
        </div>
    )
}

export default BrewCard