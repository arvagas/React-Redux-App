import React from 'react'
import { useDispatch } from 'react-redux'

const BrewCard = ({ brewery }) => {
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{brewery.name}</h1>
            <p>Location: {brewery.street}, {brewery.city}, {brewery.state}</p>
            <p>Contact: {brewery.phone}</p>
            <p>Website: <a href={brewery.website_url}>{brewery.website_url}</a></p>
            <button>Favorites</button>
        </div>
    )
}

export default BrewCard