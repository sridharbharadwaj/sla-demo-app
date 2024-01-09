import logo from './logo.svg';
import './App.css';
import {
  MortgageApplication 
 } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify'
import { currentAuthenticatedUser } from 'aws-amplify'

function App() {
  async function callAPI()
  {
    const user = await currentAuthenticatedUser()
    const token = 
    console.log( {token} )
    const requestInfo = { headers: { Authorization: token }}

    const data = await API.get('slademoRuleApi', '/', requestInfo)
    console.log( {data} )

  }
  return (    
     <>
      <button onClick={callAPI}>Call API</button>
      <MortgageApplication />
     </>
  );
}

export default withAuthenticator (App);
