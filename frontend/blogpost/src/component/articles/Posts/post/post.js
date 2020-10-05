import { Avatar } from "@material-ui/core";
import React, {useState} from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import "./post.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux'
import {postUpdate, postDelete} from '../../../../store/action.js/CRUD'

function Post(props) {

  
  const [updatePost, setUpdatePost] = useState({
    
    title:props.title,
    content:props.content

  })

  const [openedit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);


  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {

   props.onDelete(props.id)

    setOpenDelete(false);
  };


  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    props.onUpdate(updatePost.title, updatePost.content, props.id)
   
    setOpenEdit(false);
  };


  const haldleInput = (e) =>{

    setUpdatePost({
      ...updatePost,
      [e.target.name]:e.target.value

    })

  }


  return (
    <div className="post">

      <div className="header">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGv0oGQhWGxAA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=WZYz_B2Sq7PqTZ8qcBSTt6tku__0dqlA-2PIHOwVSr8" />
        <div className="showtime">
          <h3>kazi Motiour</h3>
          <span>time</span>
        </div>
        <div>

        </div>
        <div className="icon">
          <EditIcon className="editIcon" onClick={handleEditOpen} />
          <DeleteIcon className="deleteIcon" onClick={handleDeleteOpen}/>
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





      {/* Dialog for edit content */}
      <div>  
     <Dialog className="dialog"  open={openedit} onClose={handleEditClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
         
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="email"
            fullWidth
            value={updatePost.title}
            name="title"
            onChange={(e) => haldleInput(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="content"
            type="email"
            fullWidth
            value={updatePost.content}
            name="content"
            onChange={(e) => haldleInput(e)}
            
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditClose} color="primary">
           Confirm edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    

    
    {/* Dialog for Delete content */}
    <div>
      
     <Dialog className="dialog" open={openDelete} onClose={handleDeleteClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
           You want to Delete this article
          </DialogContentText>
            
            <p>Title: {props.title}</p>
            <p>Article: {props.content}</p>          
      
          </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteClose} color="primary">
           Confirm Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
    </div>
  );
}


const mapStateToDispatch = dispatch =>(
  {
      onUpdate : (title, content, id) => dispatch(postUpdate(title, content, id)),
      onDelete : (id) => dispatch(postDelete(id)),

  }
)


export default connect(null, mapStateToDispatch)(Post);
