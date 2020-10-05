import React,{useEffect} from 'react'
import './articles.css'
import Toolbox from './Toolbox/Toolbox'
import Posts from './Posts/posts'


function Articles(props) {


    return (
        <div className="article">
            {/* Toolbox */}
          {localStorage.getItem('token') && <Toolbox className="toolbox" />}
           
            <div className="border"></div>
            
            {/* post */}
            <Posts />
            
        </div>
    )
}

export default Articles;
