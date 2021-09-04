// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
// Components 
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';
import EloHistory from './components/EloHistory';
import Requests from './components/Requests';


//Private route component
const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('----This is a private route-----')
  let user = localStorage.getItem('jwtToken');

  // ..rest is data that we set such as our functions etc and props is data thats already there
    return <Route {...rest} render={ (props) => {
    return user ? <Component {...rest} {...props} /> : <Redirect to='/login' />
  } } />
}

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;
    // check to see if there is not token inside of our local storage, then the user is authenticated
      //localstorage is an objec thats inside of our browser

      if(!localStorage.getItem('jwtToken')) {
        console.log('is not authenticated...')
        setIsAuthenticated(false);
      } else {
          token = jwt_decode(localStorage.getItem('jwtToken'));
          console.log('token', token);
          setAuthToken(token); 
          setCurrentUser(token);
      }
  }, []);

  const nowCurrentUser = userData => {
      console.log('---- inside nowCurrentUser -----');
      setCurrentUser(userData);
      setIsAuthenticated(true);

  }

  const handleLogout = () => {
      // determine if there is a json web token(jwt)
      //if there is a jwt than we want to remove it
      //set current user to null 
      //set isAuthenticated to false

      if(localStorage.getItem('jwtToken')) {
        localStorage.removeItem('jwtToken'); //if there is a jwt than we want to remove it
        setCurrentUser(null); //set current user to null
        setIsAuthenticated(false);  //set isAuthenticated to false
      }
  }

  return (
    <>
      <Navbar  isAuth={isAuthenticated} handleLogout={handleLogout} />
      {/* <div className="container mt-5"> */}
      <Switch>
        {/* all of my routes will go inside of here */}
        <Route path='/signup' component={ Signup } />
        <Route path='/login' 
        //because we are passing down props we used render
       render={ (props) => <Login {...props} user={currentUser} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} /> } />
        <Route path='/about' component={ About } />
        <Route exact path='/' component={ Welcome } />
        <PrivateRoute path= '/elorequest' component={Requests} user={currentUser} handleLogout={handleLogout}/>
        <PrivateRoute path= '/elohistory' component={EloHistory} user={currentUser} nowCurrentUser={nowCurrentUser} handleLogout={handleLogout}/>
        <PrivateRoute path='/profile' component={ Profile } user={currentUser} nowCurrentUser={nowCurrentUser} setCurrentUser={setCurrentUser} handleLogout={handleLogout} />
           
      </Switch>
      {/* </div> */}
      
      <Footer />
    </>
  );
}

export default App;
