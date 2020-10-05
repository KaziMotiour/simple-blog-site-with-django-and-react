import React, {useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {authRegistration} from '../../store/action.js/auth'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 function SignUp(props) {
  const classes = useStyles();
  console.log(props)

  const [singupInfo,setSingupInfo ] = useState({
    username:'',
    email:'', 
    password1:'',
    password2:''
  })

  const handleInput = (e) =>{
    setSingupInfo({
      ...singupInfo,
      [e.target.name]:e.target.value
    })

  }

  async function foo() {
    const result1 = await new Promise((resolve) => setTimeout(() => {
      console.log('hello')
      {localStorage.getItem('token') && props.history.push('/')}
    }, 2000))
    return result1

  }


  const handleSingup = (e) =>{
    e.preventDefault()
    const {username, email, password1, password2} = singupInfo
    console.log(username)
    props.onSingUP(username, email, password1, password2)
    foo()


  }

  useEffect(() =>{
    
    localStorage.getItem('token') && props.history.push('/')
    
  },[])
 
  
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                autoFocus
                onChange={(e) =>handleInput(e)}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) =>handleInput(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password1"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) =>handleInput(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) =>handleInput(e)}
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{background:"rgb(10, 97, 68)", color:'white'}}
            className={classes.submit}
            onClick={(e) =>handleSingup(e)}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink to='/login' variant="body2">
                Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToDispatch = dispatch =>(
  {
      onSingUP : (username, email, password1, password2) => dispatch(authRegistration(username, email, password1, password2)),

  }
)


export default connect(null, mapStateToDispatch)(SignUp);