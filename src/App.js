import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home/home'
import Shop from './pages/shop'
import About from './pages/about/about'
import Navbar from './components/navbar/navbar'
import SingleProduct from './components/singleProduct/singleproduct'
import Cart from './components/cart/cart'
import Checkout from './pages/checkout'
import Footer from './components/footer/footer'
import Category from './components/category/Category'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>

          {/* <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route> */}
          <Route path='/category/:name'>
            <Category />
          </Route>
          <Route path='/store/:name'>
            <SingleProduct />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
