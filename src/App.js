import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login/login/Login';
import SignUp from './components/login/signUp/SignUp';
import User from './components/users/User.jsx'
import UserConfirm from './components/users/UserConfirm.jsx'
import AlertState from './context/alert/AlertState';
import AuthState from './context/autentication/authState';
import TurnState from './context/turn/turnState';
import UserState from './context/user/userState';
import Home from './components/home/Home'
import AdminTurns from './components/users/adminUsers/AdminTuns'
import AdminUsers from './components/users/adminUsers/AdminUsers'
import Admin from './components/users/adminUsers/Admin/Admin'
import authToken from './config/tokenAuth';
import PrivateRourte from './components/protectRoutes/PrivateRoute';
import Layout from './components/general/layout';

//check if we have token
const token = localStorage.getItem('token');
if (token) {
  authToken(token);
}

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    <BrowserRouter>
      <AlertState>
        <AuthState>
          <UserState>
            <TurnState>
              <Switch>
                < Route exact path="/" component={Home} />
                < Route exact path="/login" component={Login} />
                < Route exact path="/signup" component={SignUp} />
                <Layout>
                < PrivateRourte exact path="/user" component={User} />
                  {/* < PrivateRourte exact path="/user/turn" component={User} /> */}
                < PrivateRourte path="/confirm" component={UserConfirm} />
                {/* < PrivateRourte path="/download" component={Download} /> */}
                < PrivateRourte exact path="/admin" component={Admin} />
                < PrivateRourte path="/admin/users" component={AdminUsers} />
                < PrivateRourte path="/admin/turns" component={AdminTurns} />
                </Layout>
              </Switch>
            </TurnState>
          </UserState>
        </AuthState>
      </AlertState>
    </BrowserRouter>
  )
}

export default App;
