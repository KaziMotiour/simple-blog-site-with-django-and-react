import React from "react";
import Navbar from "./component/navbar/navbar";
import Articles from "./component/articles/articles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Singup from "./component/singup/Singup";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch action here

  // }, [])
  const auth = useSelector((state) => state.auth);
  const { token, loading, error } = auth;
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Articles */}
        {token ? <Route path="/" exact component={Articles} /> : null}
        <Route path="/login" exact component={Login} />
        <Route path="/singup" exact component={Singup} />
      </div>
    </Router>
  );
}
