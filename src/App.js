import React, { Suspense } from 'react'
import './App.css';
import './css/Home.css';
import { Spinner } from 'react-bootstrap'
import Logo from "./assets/logoFinal.png";
import { HashRouter, Route, Switch, } from "react-router-dom";
const Home = React.lazy(() => import('./pages/Home/Home'))
const Shop = React.lazy(() => import('./pages/Shop/Shop'))
const NotFound = React.lazy(() => import('./pages/Not-Found'))
const ProductPage = React.lazy(() => import('./pages/ProductPage/ProductPage'))
const Step1 = React.lazy(() => import('./components/Order/Step1'))
const Step2 = React.lazy(() => import('./components/Order/Step2'))
const Step3 = React.lazy(() => import('./components/Order/Step3'))
const PrivacyPolicy = React.lazy(() => import('./pages/Privacy-Policy/PrivacyPolicy'))
const TermsCondition = React.lazy(() => import('./pages/Terms-Conditions/TermsConditions'))
const Cart = React.lazy(() => import('./pages/Cart/AddToCart'))
const Thankyou = React.lazy(() => import('./pages/Thank-you/Thankyou'))

const preLoader = <div className="loader"> < img src={ Logo } alt="logo" /> <Spinner variant='info' animation="border" /> </div>
function App() {
  // const Home = React.lazy(()=> import('./pages/Home/Home'))
  return (
    <>
      <Suspense fallback={ preLoader }>
        <HashRouter basename="/">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/shop" component={ Shop } generate={ localStorage.getItem("order") } />
            <Route exact path="/shop/product/:id" component={ ProductPage } />
            <Route exact path="/order/step1" component={ Step1 } />
            <Route exact path="/order/step2" component={ Step2 } />
            <Route exact path="/order/step3" component={ Step3 } />
            <Route exact path="/policy" component={ PrivacyPolicy } />
            <Route exact path="/terms-condition" component={ TermsCondition } />
            <Route exact path="/Cart" component={ Cart } />
            <Route exact path="/thankyou" component={ Thankyou } />
            <Route component={ NotFound } />

          </Switch>

        </HashRouter>
      </Suspense>
    </>
  );
}

export default App;
