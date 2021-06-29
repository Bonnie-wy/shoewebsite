import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Components
import Showcase from './components/Showcase';
import ProductPage from './components/ProductPage';
import CategoryPage from './components/CategoryPage';
import Footer from './components/Footer';
import ShoppingCartButton from './components/ShoppingCartButton';
import ShoppingCart from './components/ShoppingCart';
// Custom hook
import UseProducts from './hooks/useProducts';
// GlobalProvider
import { GlobalProvider, GlobalContext } from './context/GlobalState';

function App() {
  const { products } = UseProducts();

  return (
    <Router>
      <GlobalProvider>
        <div className='container appContainer'>
            <header className="container headerContainer">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-12">
                  <h1 className="text-center">Golden Shoe</h1>
                </div>
                <div className="col-lg-8 col-md-12 flex">
                  <nav className="flex link-container">
                    <div className="flex">
                      <Link className="link" to="/">Home</Link>
                      <Link className="link" to="/products">Products</Link>
                    </div>
                  </nav>
                  <div className="text-center">
                    <button className="btn btnUser"><i className="far fa-user"></i></button>
                    <Link to="/checkout">
                      <ShoppingCartButton />
                    </Link>
                  </div>
                </div>
              </div>
            </header>
            <Switch>
              <div className='container contentContainer'>
                <Route path="/" exact>
                  <Showcase products={products} />
                </Route>
                <Route path="/checkout">
                  <ShoppingCart />
                </Route>
                <Route path="/products">
                  <ProductPage products={products} />
                </Route>
                <Route path="/category/:id">
                  <CategoryPage />
                </Route>
              </div>
            </Switch>
            <Footer />
        </div>  
      </GlobalProvider>
    </Router>
  );
}

export default App;