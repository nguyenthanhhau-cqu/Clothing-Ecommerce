import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./pages/Home-page/Hompage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Navigator from "./components/NavigationBar/Navigator";
import SignInAndSignUp from "./pages/SignIn-SignUp-page/SignInAndSignUp";
import { auth } from "./firebase/firebaseUtils";

function App() {
  const [currentUser, setCurrentUser] = useState({
    currentUser: "",
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser({ currentUser: user });
    });
  }, []);

  return (
    <Router>
      <Navigator isAuthenticated={currentUser.currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/login" component={SignInAndSignUp} />
      </Switch>
    </Router>
  );
}

export default App;
