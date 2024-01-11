import logo from './logo.svg';
import './App.css';
import { MortgageApplication } from './ui-components';
import { withAuthenticator } from '@aws-amplify/cli';

function App() {
  return (    
     <>
      <MortgageApplication />
     </>
  );
}

export default withAuthenticator (App);
