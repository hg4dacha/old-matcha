import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import NewPassword from './components/NewPassword/NewPassword';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  return (
    <BrowserRouter>
    
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/SignUp' component={SignUp} />
        <Route path='/SignIn' component={SignIn} />
        <Route path='/ForgotPassword' component={ForgotPassword} />
        <Route path='/NewPassword' component={NewPassword} />
        <Route component={NotFound} />
      </Switch>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;