import React from 'react'
import axios from 'axios'
import {FETCH_DATA, ERROR} from './actionType'





export const fetchData = () => async dispatch =>{

    try {
        
        const  res = await axios.get('http://127.0.0.1:8000/api/')
        
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

        await axios.post(`http://127.0.0.1:8000/api/create/`,{title, content})

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

        await axios.put(`http://127.0.0.1:8000/api/update/${id}/`, {title, content})

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

        await axios.delete(`http://127.0.0.1:8000/api/delete/${id}/`)

        dispatch(fetchData())

    }catch (error){

        dispatch({
            type : ERROR,
            error : error
        })

    }
    

}







