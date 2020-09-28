import React from 'react'
import './articles.css'
import Toolbox from './Toolbox/Toolbox'
import Posts from './Posts/posts'

function Articles() {
    return (
        <div className="article">
            {/* Toolbox */}
            <Toolbox className="toolbox" />
           
            <div className="border"></div>
            
            {/* post */}
            <Posts />
            
        </div>
    )
}

export default Articles;
