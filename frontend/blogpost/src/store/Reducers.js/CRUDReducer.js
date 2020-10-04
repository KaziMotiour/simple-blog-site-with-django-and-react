import React from 'react'
import {FETCH_DATA} from '../action.js/actionType'
import { fetchData } from '../action.js/CRUD'

const initialState = {
    post:[],
    loading:false,
    error:null,
}

const fetchedData = (state, action) =>(
    {
        ...state,
        post:action.data
    }
)



function CRUDReducer(state=initialState, action) {
    switch(action.type){
        case FETCH_DATA: return fetchedData(state, action)

        default:return state
    }
}

export default CRUDReducer
