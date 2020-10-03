import React,{useEffect} from 'react'
import * as actionType from '../action.js/actionType'
import {updateObject} from '../action.js/utility'

const initialState = {
    token: null,
    error: null,
    loading: false
}


const authStart = (state, action)=> (
  
    {
    ...state,
    error:null,
    loading:true

    }
)

const authSuccess = (state, action)=> (
    {
    ...state,
    token: localStorage.getItem('token'),
    error:null,
    loading:false

    })


const authFail = (state, action)=> (
    {
    ...state,
    
    error:action.error,
    loading:false

    })

const authlogout = (state, action) =>(
    console.log('ass'),
    
    {
    ...state,
    token:null
})



const AuthReducer = (state=initialState, action) =>{

    switch(action.type){
        case actionType.AUTH_START: return authStart(state, action)
        case actionType.AUTH_SUCCESS: return authSuccess(state, action)
        case actionType.AUTH_FAIL: return authFail(state, action)
        case actionType.AUTH_LOGOUT: return authlogout(state, action)
        default: return state
    }

    

}

export default AuthReducer
