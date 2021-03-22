import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import Nav from './components/Nav';
import Cart from './components/Cart';
import Products from './components/Products';
import ProductPage from './components/ProductPage';
import { useCookies } from 'react-cookie';

const App = () => {
  const [cookies, setCookie] = useCookies(['mycookie']);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({products: []});
  const [cartitems, setCartItems] = useState(0);
  const [subtot, setSubtot] = useState(0);

  const getProducts = async () => {
    const res  = await fetch('https://fakestoreapi.herokuapp.com/products', {
      method: 'GET',
      headers: { 
        'Content-Type': 'text/plain'
      }
    }).then(res=>res.json()).then(json=>setProducts(json));
  }

  const getSubtot = () => {
    let subtot = 0;
    cart.products.map((item) => {
      subtot += item.quantity * (products.find(product => product.id == item.productID)).price;
    })
    setSubtot(subtot);
  }

  const onAddToCart = (productid, quantity) => {
    const cartcopy = cart;
    const index = cartcopy.products.findIndex(product => product.productID == productid);
    if (index >= 0) {
      cartcopy.products[index] = {productID: productid, quantity: cartcopy.products[index].quantity + quantity};
    } else {
      cartcopy.products.push({productID: productid, quantity: quantity});
    }
    setCart(cartcopy);

    let items = 0;
    cart.products.map((product) => {
      items += parseInt(product.quantity,10);
    });
    setCartItems(items);
    updateCartItems();
  }

  const onUpdateCart = (productid, quantity) => {
    const cartcopy = cart;
    const index = cartcopy.products.findIndex(product => product.productID == productid);
    if (index >= 0) {
      if (quantity == 0) {
        cartcopy.products.splice(index, 1);
      } else {
        cartcopy.products[index] = {productID: productid, quantity: quantity};
      }
    }
    setCart(cartcopy);
    updateCartItems();
  }

  const updateCartItems = () => {
    let items = 0;
    cart.products.map((product) => {
      items += parseInt(product.quantity,10);
    });
    setCartItems(items);
    getSubtot();
  }

  useEffect(() => {
    if (cookies.mycookie) {
      setCart(cookies.mycookie);
    }
    getProducts();
  }, []);

  useEffect(() => {
    updateCartItems();
  }, [cart]);

  useEffect(() => {
    setCookie('mycookie', cart, {path: '/', maxAge: 3600});
  }, [cartitems])

  return (
    <React.Fragment>
      <Nav cartitems={cartitems} cart={cart}/>
      <Switch>
        <Route exact path="/">
          <Products products={products} />
        </Route>
        <Route path="/cart">
          <Cart cart={cart} products={products} UpdateCart={onUpdateCart} subtot={subtot} getSubtot={getSubtot} />
        </Route>
        <Route path="/product/:prodid">
          <ProductPage AddToCart={onAddToCart} products={products}/>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
