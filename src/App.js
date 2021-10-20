import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Componnets/About/About';
import Contact from './Componnets/Contact/Contact';
import AuthProvider from './Componnets/Context/AuthProvider';
import Footer from './Componnets/Footer/Footer';
import Header from './Componnets/Header/Header';
import Home from './Componnets/Home/Home';
import Login from './Componnets/Login/Login';
import NotFound from './Componnets/NotFound/NotFound';
import PrivateRoute from './Componnets/PrivateRoute/PrivateRoute';
import Registration from './Componnets/Registration/Registration';
import ServiceDetails from './Componnets/ServiceDetails/ServiceDetails';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
