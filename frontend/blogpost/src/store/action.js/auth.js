import React from 'react'
import axios from 'axios'
import {AUTH_START, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_FAIL} from './actionType'

export const authStart = () =>{
   
    return{

        type:AUTH_START

    }
}


export const authSucces = token =>({
    
    type: AUTH_SUCCESS,
    token : token

})

export const auhtLogout = () =>(
    localStorage.removeItem('token'),

    {
        type:AUTH_LOGOUT
    }

)

export const authFail = error =>({
    type: AUTH_FAIL,
    error:error
}) 


export const authLogin = (username, password) =>(
   async dispatch => {
        dispatch(authStart())
        await axios.post('http://127.0.0.1:8000/rest-auth/login/', {username, password})
        .then(res =>{
            const token = res.data.key 
            localStorage.setItem('token', token)
            dispatch(authSucces(token))
            

        }).then(error =>{
            dispatch(authFail(error))
        })

    }
)

export const authRegistration = (username, email, password1, password2) =>(
    async   dispatch => {
        dispatch(authStart())
        await axios.post('http://127.0.0.1:8000/rest-auth/registration/', {username,  email, password1, password2})
        .then(res =>{
            const token = res.data.key 
            localStorage.setItem('token', token)
            dispatch(authSucces(token))
            

        }).then(error =>{
            dispatch(authFail(error))
        })

    }
)