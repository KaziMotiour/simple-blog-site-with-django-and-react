import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {authLogin} from '../../store/action.js/auth'


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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {

  useEffect(() =>{
    
    localStorage.getItem('token') && props.history.push('/')
  
  },[])



  const classes = useStyles();
  

    const [loginInfo, setLoginInfo] = useState({
      username:'',
      password:''
    })


    const userInfo = e =>{
      setLoginInfo({
        ...loginInfo,
        [e.target.name]:e.target.value

      })


    }

    const userLogin = () =>{
      props.onAuth(loginInfo.username, loginInfo.password)
      props.history.push('/')
    }
 

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="username"
            autoComplete="email"
            autoFocus
            onChange={e=>userInfo(e)}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e=>userInfo(e)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            
            fullWidth
            variant="contained"
    
            style={{background:"rgb(10, 97, 68)" , color:'white'}}
            className={classes.submit}
            onClick={userLogin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <NavLink to="" variant="body2">
                Forgot password?
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink to='/singup' variant="body2">
                "Don't have an account? Sign Up"
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
         
    </Container>
  );
}

const mapStateToProps = state =>({

  loading: state.auth.loading,
  error: state.auth.error
})


const mapStateToDispatch = dispatch =>(
    {
        onAuth : (username, password) => dispatch(authLogin(username, password)),

    }
)


export default  connect(mapStateToProps, mapStateToDispatch) (SignIn);