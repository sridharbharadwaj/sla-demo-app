//import logo from './logo.svg';
import './App.css';
import { MortgageApplication } from './ui-components';
import { Authenticator } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (    
     <Authenticator.Provider>
      <MortgageApplication />
     </Authenticator.Provider>
  );
}

export default withAuthenticator (App);
