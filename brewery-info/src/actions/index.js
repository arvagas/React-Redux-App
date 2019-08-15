import axios from 'axios'

export const FETCH_BREWERIES_START = 'FETCH_BREWERIES_START'
export const FETCH_BREWERIES_SUCCESS = 'FETCH_BREWERIES_SUCCESS'
export const FETCH_BREWERIES_FAIL = 'FETCH_BREWERIES_FAIL'
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export const getSearchResults = (userInput) => {
    const inputChange = userInput.toLowerCase().split(' ').join('_')
    return dispatch => {
        dispatch({ type: FETCH_BREWERIES_START })
        axios
            .get(`https://api.openbrewerydb.org/breweries?by_state=${inputChange}`)
            .then(res => dispatch({ type: FETCH_BREWERIES_SUCCESS, payload: res.data }))
            .catch(err => dispatch({ type: FETCH_BREWERIES_FAIL, payload: err.response }))
    }
}