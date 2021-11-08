import React from 'react'
import './App.css';
import {HashRouter ,Route ,BrowserRouter, Switch ,} from "react-router-dom";
import Home from './pages/Home/Home'
import Task from './components/Task'
  
function App() {
 // const Home = React.lazy(()=> import('./pages/Home/Home'))
  return (
   <>
    <HashRouter basename="/">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/task" component={Task} />
      </Switch>  

    </HashRouter>
   </>
  );
}

export default App;
