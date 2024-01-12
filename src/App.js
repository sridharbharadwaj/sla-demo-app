//import logo from './logo.svg';
import './App.css';
import { MortgageApplication } from './ui-components';
import { Authenticator } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App({ signOut, user }) {
  return (    
     <Authenticator.Provider>
      <h1>Hello { user.username }!</h1>
      <MortgageApplication />
     </Authenticator.Provider> 
  );
}

export default withAuthenticator (App);
