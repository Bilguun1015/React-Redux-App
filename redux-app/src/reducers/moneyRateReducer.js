import {
    FETCH_CURRENCY_DATA_START,
    FETCH_CURRENCY_DATA_SUCCESS,
    FETCH_CURRENCY_DATA_FAILURE
} from '../actions'

const initialState = {
    rates: [],
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CURRENCY_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_CURRENCY_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                rates: action.payload,
                error: ''
            };
        case FETCH_CURRENCY_DATA_FAILURE:
            return {

            }
        default:
            return state;
    }
};