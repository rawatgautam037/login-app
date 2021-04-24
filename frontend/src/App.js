import React from 'react';
import { observer } from 'mobx-react';
import UserStore from './stores/UserStore';
import LoginForm from './LoginForm';
import './App.css';
import InfoForm from './InfoForm';
import HomePage from './HomePage';

class App extends React.Component{
  async componentDidMount() {     //login function

    try {
      
      //fetching API point isLogged In
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if(result && result.success)  {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }

      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }

    catch(e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogOut() {     //logout function

    try {
      
      //fetching API point isLogged In
      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      });

      let result = await res.json();

      if(result && result.success)  {
        UserStore.isLoggedIn = false;
        UserStore.username = '';
        UserStore.system_ip = '';
        UserStore.port = '';
        UserStore.time_zone = '';
        UserStore.sync_duration = '';
        UserStore.isFormSubmit = false;
      }
    }

    catch(e) {
     console.log(e)
    }
  }



  render() {

    if(UserStore.loading) {
      return (
        <div className="app">
          <div className='container'>
            Loading, please wait..
          </div>
        </div>
      );
    }

    else {
      
      if(UserStore.isLoggedIn==true && UserStore.isFormSubmit==false) {
        return(
          <div className="app">
            <div className='container'>
              <InfoForm username = {UserStore.username} />
            </div>
          </div>
        );
      }

      else if(UserStore.isLoggedIn && UserStore.isFormSubmit) {
        return(
          <div className="app">
            <div className='container'>
              <HomePage />
            </div>
          </div>
        );
      }
      
      return (
        <div className="app">
          <div className='container'>
            <LoginForm />
          </div>
        </div>
      );
    }


  }
}

export default observer(App);
