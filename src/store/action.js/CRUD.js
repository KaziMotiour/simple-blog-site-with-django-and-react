import React from 'react'
import axios from 'axios'
import {FETCH_DATA, ERROR} from './actionType'





export const fetchData = () => async dispatch =>{

    try {
        
        const  res = await axios.get('https://kazi-motiour-django-react-app.herokuapp.com/api/')
        
        dispatch({
            type: FETCH_DATA,
            data: res.data
        })
        
    }catch (error) {
        dispatch({
            type : ERROR,
            error : error
        })
    }
}

export const postCreate = (title, content) => async dispatch =>{

    try{

        await axios.post(`https://kazi-motiour-django-react-app.herokuapp.com/api/create/`,{title, content})

        dispatch(fetchData())

    }catch (error){

        dispatch({
            type : ERROR,
            error : error
        })

    }
    

}

export const postUpdate = (title, content, id) => async dispatch =>{
    
    

    try{

        await axios.put(`https://kazi-motiour-django-react-app.herokuapp.com/api/update/${id}/`, {title, content})

        dispatch(fetchData())

    }catch (error){

        dispatch({
            type : ERROR,
            error : error
        })

    }
    

}

export const postDelete = ( id) => async dispatch =>{
   
    

    try{

        await axios.delete(`https://kazi-motiour-django-react-app.herokuapp.com/api/delete/${id}/`)

        dispatch(fetchData())

    }catch (error){

        dispatch({
            type : ERROR,
            error : error
        })

    }
    

}







