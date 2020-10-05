import React, {useState,useEffect} from 'react'
import Post from './post/post'
import axios  from 'axios'
import {connect} from 'react-redux'
import {fetchData} from '../../../store/action.js/CRUD'

function Posts(props) {

    const [post, setPost] = useState([])
    console.log(post)
    
    useEffect(() =>{

        props.fetchDatas()

    },[])

    const posts = props.post && props.post.map(value=>(
        <Post key={value.id} id={value.id} title={value.title} content={value.content} />
    ))

    return (
        <div className="posts">
            {posts}
            
        </div>
    )
}


const mapStateToProps = state =>({

    post: state.CRUD.post,
     
  })
  
  
  const mapStateToDispatch = dispatch =>(
      {
          fetchDatas : (username, password) => dispatch(fetchData()),
  
      }
  )
  

export default connect(mapStateToProps, mapStateToDispatch)(Posts)
