import React, {useState,useEffect} from 'react'
import Post from './post/post'
import axios  from 'axios'

function Posts() {

    const [post, setPost] = useState([])


    useEffect(() =>{

      axios.get('http://127.0.0.1:8000/api/')
      .then(res =>setPost(res.data))

    },[])

    const posts = post.map(value=>(
        <Post key={value.id} title={value.title} content={value.content} />
    ))

    return (
        <div className="posts">
            {posts}
            
        </div>
    )
}

export default Posts
