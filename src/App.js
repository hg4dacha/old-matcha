import './App.css';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import newPassword from './components/newPassword/newPassword';
import Footer from './components/Footer/Footer';
import { Fragment } from 'react';

function App() {

  return (
    <Fragment>
      {/* <Home /> */}
      {/* <SignUp /> */}
      <SignIn />
      {/* <ForgotPassword /> */}
      {/* <newPassword /> a supprimmer par la suite */}
      <Footer/>
    </Fragment>
  );
}

export default App;
