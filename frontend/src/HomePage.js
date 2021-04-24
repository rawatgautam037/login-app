import React from 'react';
import SubmitButton from './SubmitButton';
import UserStore from './stores/UserStore';
import './App.css';

class HomePage extends React.Component{

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
    return (
      <div className="inputField">
        <h1>Welcome {UserStore.username}</h1> 
        <p>time_zone = {UserStore.time_zone}</p>
        <p>system_ip = {UserStore.system_ip}</p>
        <p>port = {UserStore.port}</p>
        <p>sync_duration = {UserStore.sync_duration}</p>
       
        <SubmitButton
        text = {'Log out'}
        disabled = {false}
        onClick = { () => this.doLogOut() }
        />
      </div>
    );
  }
}

export default HomePage;



