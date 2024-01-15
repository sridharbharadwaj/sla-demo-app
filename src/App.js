//import logo from './logo.svg';
import './App.css';
import { MortgageApplication } from './ui-components';
import { Authenticator } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { callRule } from './rules/rules.ts';

function App({ signOut, user }) {
  return (    
     <Authenticator.Provider>
      <h1 id="greeting">[{ getGreeting() }]</h1>
      <h1>{ user.username }!</h1>
      <button onClick={signOut}>Sign out</button>
      <MortgageApplication />
     </Authenticator.Provider> 
  );
}

function getGreeting()
{
  const today = new Date().toISOString();
  const myPromise = callRule('greeting-rule', { today });
  
  
  //myPromise.then(response => {console.log("value:" + response); document.getElementById("greeting").innerHTML = response; return response;})

  
  myPromise.then(
    function(value) { console.log("value:" + value); document.getElementById("greeting").innerHTML = value; return value; },
    function(error) { console.log("error:" + error); document.getElementById("greeting").innerHTML = error; return error; }
  ).catch(function(error) { console.log("Error:" + error)});
  



  
  
  return "not working";
}
export default withAuthenticator (App);
