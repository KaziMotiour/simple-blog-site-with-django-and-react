import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link , withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { authSucces, userLogout } from "../../store/action.js/auth";

function Navbar(props) {
  useEffect(() => {
    props.onSuccess();
  }, []);

  const handleLogout = () =>{
    props.onLogout()
    props.history.push('http://localhost:3000/login/')

  }

  const [permission, setPermission] = useState(false);
  return (
    <div className="navbar">
      <div className="nav">
         
          <p className="nav-item">
            <Link to="/" className="a">
           
              Home
            </Link>
          </p>
        
        {props.token !== null ? (
          <Link  className="nav-item" onClick={handleLogout} to="/login">
            Logout
          </Link>
        ) : (
          <p className="nav-item">
            <Link to="/login" className="a">
              Login
            </Link>{" "}
          </p>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapStateToDispatch = (dispatch) => ({
  onSuccess: () => dispatch(authSucces()),
  onLogout: () => dispatch(userLogout()),
});

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Navbar));
