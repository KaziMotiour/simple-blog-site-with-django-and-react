import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authSucces, auhtLogout } from "../../store/action.js/auth";

function Navbar(props) {
  useEffect(() => {
    props.onSuccess();
  }, []);

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
          <Link to="/login" className="nav-item" onClick={props.onLogout}>
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
  onLogout: () => dispatch(auhtLogout()),
});

export default connect(mapStateToProps, mapStateToDispatch)(Navbar);
