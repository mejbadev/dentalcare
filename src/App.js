import logo from './logo.svg';
import './App.css';
import Home from './Componants/Home/Home';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Header from './Componants/Header/Header';
import Register from './Componants/Register/Register';

import Login from './Componants/Login/Login';
import About from './Componants/About/About';
import Footer from './Componants/Footer/Footer';

import ServiceDetail from './Componants/ServiceDetail/ServiceDetail';
import PrivateRoute from './Componants/PrivateRoute/PrivateRoute';
import Blogs from './Componants/Blogs/Blogs';
import GetAppointMent from './Componants/GetAppointMent/GetAppointMent';

function App() {
  return (
    <div className="App">
      <AuthProvider>

      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path = '/'>
          <Home></Home>
        </Route>
        <Route path= '/home'>
          <Home></Home>
        </Route>
        
        <Route path='/about'>
          <About></About>
        </Route>
        <PrivateRoute path='/blogs'>
          <Blogs></Blogs>
        </PrivateRoute>
        <PrivateRoute path='/appointment'>
          <GetAppointMent></GetAppointMent>
        </PrivateRoute>
        <PrivateRoute path='/services/:serviceId'>
          <ServiceDetail></ServiceDetail>
        </PrivateRoute>
        <Route path= '/login'>
          <Login></Login>
        </Route>
        <Route path='/register'>
          <Register></Register>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
