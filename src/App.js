import React from 'react'
import './App.css';
import {HashRouter ,Route , Switch ,} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Task from './components/Task'
import ProductPage from './pages/ProductPage/ProductPage';
  
function App() {
 // const Home = React.lazy(()=> import('./pages/Home/Home'))
  return (
   <>
    <HashRouter basename="/">
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/task" component={Task} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/product" component={ProductPage} />
      </Switch>  
      <Footer/>
 
    </HashRouter>
   </>
  );
}

export default App;
