import React from 'react'
import './App.css';
import {HashRouter ,Route , Switch ,} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Task from './components/Task'
import ProductPage from './pages/ProductPage/ProductPage';
import Step1 from './components/Order/Step1'
import Step2 from './components/Order/Step2'
import Step3 from './components/Order/Step3'
import PrivacyPolicy from './pages/Privacy-Policy/PrivacyPolicy';
  
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
        <Route exact path="/order/step1" component={Step1} />
        <Route exact path="/order/step2" component={Step2} />
        <Route exact path="/order/step3" component={Step3} />
        <Route exact path="/policy" component={PrivacyPolicy} />
      </Switch>  
      <Footer/>
 
    </HashRouter>
   </>
  );
}

export default App;
