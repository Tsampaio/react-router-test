import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

function App() {
  const [users, setUsers] = useState([
      {
        id: "1",
        name: "John Doe",
        email: "john@email.com",
        password: "123456",
        role: "user"
      }
    ]);
  const [auth, setAuth] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar auth={auth}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" render={ () =><Login details={users} auth={auth} setAuth={setAuth} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
