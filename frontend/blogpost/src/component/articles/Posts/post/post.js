import { Avatar } from "@material-ui/core";
import React from "react";
import "./post.css";

function Post(props) {
  return (
    <div className="post">

      <div className="header">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGv0oGQhWGxAA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=WZYz_B2Sq7PqTZ8qcBSTt6tku__0dqlA-2PIHOwVSr8" />
        <div className="showtime">
          <h3>kazi Motiour</h3>
          <span>time</span>
        </div>
      </div>
      <div className="body">
        <h4>{props.title}</h4>
        <p className="content">{props.content}</p>
        </div> 
      <div className="footer">
          <h4>like</h4>
          <h4>comment</h4>
          <h4>share</h4>
      </div>
    </div>
  );
}

export default Post;
