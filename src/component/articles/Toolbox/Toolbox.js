import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import './Toolbox.css'
import { Button } from '@material-ui/core';
import {connect} from 'react-redux'
import {postCreate} from '../../../store/action.js/CRUD'

function Toolbox(props) {

    const [post, setPost] = useState({
        title:'',
        content:''
    })




    const handlePost = (e) =>{

        setPost({
            ...post,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = () =>{
        props.onCreate(post.title, post.content)
        
        setPost({
            title: '',
            content: '',
        })

    }


    return (
        <div className="toolbox">
            <h3>Write an article</h3>
            <TextField value={post.title} name="title" onChange={(e) =>handlePost(e)} required className="title" label="Make a Title"/>
            <textarea value={post.content} name="content" onChange={(e) =>handlePost(e)}  className="textarea" placeholder="Write what ever you love"></textarea>
            <div className="butoon">
            <Button variant="contained" className="button" onClick={handleSubmit} >Post </Button>
            </div>
        </div>
    )
}


  
  const mapStateToDispatch = dispatch =>(
      {
          onCreate : (title, content) => dispatch(postCreate(title, content)),
  
      }
  )
  

export default connect(null,mapStateToDispatch )(Toolbox)
