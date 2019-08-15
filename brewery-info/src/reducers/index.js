import {
    FETCH_BREWERIES_START,
    FETCH_BREWERIES_SUCCESS,
    FETCH_BREWERIES_FAIL,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES
}
from '../actions'

const initialState = {
    favorites: [],
    searchList: [
        {
            id: 3136,
            name: 'Flying Dog Brewery',
            brewery_type: 'regional',
            street: '4607 Wedgewood Blvd',
            city: 'Frederick',
            state: 'Maryland',
            postal_code: '21703-7120',
            country: 'United States',
            longitude: '-77.4267910677553',
            latitude: '39.3628322',
            phone: '3016947899',
            website_url: 'https://www.flyingdog.com/',
            updated_at: '2018-08-24T00:40:30.783Z',
            tag_list: []
        }
    ],
    error: '',
    isFetching: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BREWERIES_START :
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_BREWERIES_SUCCESS :
            return {
                ...state,
                searchList: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_BREWERIES_FAIL :
            return {
                ...state,
                isFetching: false,
                error: `${action.payload.status} ${action.payload.data.message}`
            }
        case ADD_TO_FAVORITES :
            return state
        case REMOVE_FROM_FAVORITES :
            return state
        default :
            return state
    }
}