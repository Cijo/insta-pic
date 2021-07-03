import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsAmplifyConfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import AuthComponent from './components/AuthComponent';

Amplify.configure(awsAmplifyConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to Insta Pic</h2>
        <AuthComponent />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
