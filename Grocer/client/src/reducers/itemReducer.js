import uuid from 'uuid';
import {
    GET_ITEMS,
    ADD_ITEMS,
    DELETE_ITEMS
} from '../action/types';

const initialState = {
    items: [
            {id: uuid(), name: 'Eggs' },
            {id: uuid(), name: 'Milk' },
            {id: uuid(), name: 'Steak' },
            {id: uuid(), name: 'Water' }
        ]
}

export default function(state = initialState, action) {
    switch(action.types) {
        case GET_ITEMS:
            return{
                ...state
            };
        default:
            return state;
    }
}