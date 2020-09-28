import React from 'react'
import TextField from '@material-ui/core/TextField';
import './Toolbox.css'
import { Button } from '@material-ui/core';

function Toolbox() {
    return (
        <div className="toolbox">
            <h3>Write an article</h3>
            <TextField required className="title" label="Make a Title"/>
            <textarea className="textarea" placeholder="Write what ever you love"></textarea>
            <div className="butoon">
            <Button variant="contained" className="button" >Post </Button>
            </div>
        </div>
    )
}

export default Toolbox
