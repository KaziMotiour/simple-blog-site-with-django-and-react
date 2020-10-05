import React from "react";
import Navbar from "./component/navbar/navbar";
import Articles from "./component/articles/articles";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Login from './component/Login/Login'
import Singup from './component/singup/Singup'
import {connect} from 'react-redux'

function App(props) {

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Articles */}
       <Route path="/" exact component={Articles} />
        <Route path="/login" exact component={Login} />
        <Route path="/singup" exact component={Singup} />
        </div>
    </Router>
  );
}


const mapStateToProps = state =>({

  token: state.auth.token,
  loading: state.auth.loading,
    error: state.auth.error
})




export default connect(mapStateToProps, null)(App);
