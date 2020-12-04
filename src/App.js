import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/NotFound/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SubjectDetails from './components/SubjectDetails/SubjectDetails';
import Navbar from './components/Navbar/Navbar';
import InsertSubject from './components/InsertSubject/InsertSubject';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const keywordContext = createContext();

function App() {

  const [keyword, setKeyword] = useState('');

  return (
    <div>
      <keywordContext.Provider value={[keyword, setKeyword]}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/details/:id">
              <SubjectDetails />
            </PrivateRoute>
            <PrivateRoute path="/insert">
              <InsertSubject />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </keywordContext.Provider>
    </div>
  );
}

export default App;
