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
import NewSubject from './components/NewSubject/NewSubject';
import Navbar from './components/Navbar/Navbar';
import InsertSubject from './components/InsertSubject/InsertSubject';
import { createContext, useState } from 'react';

export const subjectContext = createContext();

function App() {

  const [subjects, setSubjects] = useState([]);

  return (
    <div>
      <subjectContext.Provider value={[subjects, setSubjects]}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/details/:id">
              <SubjectDetails />
            </Route>
            <Route path="/new">
              <NewSubject />
            </Route>
            <Route path="/insert">
              <InsertSubject />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </subjectContext.Provider>
    </div>
  );
}

export default App;
