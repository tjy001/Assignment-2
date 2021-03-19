import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import CartItem from './CartItem';
import {Link} from 'react-router-dom';

const Cart = ({cart, products, UpdateCart, subtot}) => {

    return (
        
        cart.products.length == 0 ?
        <div className="flex flex-col">
            <div className="flex-grow p-8 text-4xl text-gray-500 text-center font-bold">
                <h1>Your cart is empty :(</h1>
                <h1>Why not add some items to it?</h1>
            </div>
            <div className="text-center text-2xl">
                <Link to='/'>
                    <button className="bg-green-400 opacity-75 hover:opacity-100 text-green-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold mt-4"><span className="-ml-2 mr-2"></span> GO SHOPPING!</button>
                </Link>
            </div>
        </div> 
        :
        <div className="min-h-full flex flex-col">
            <main className="flex-grow p-8 text-2xl">
                <Grid container direction="column" justify="flex-start" alignItems="center" spacing={1}>
                    {cart.products.map((cartitem) => (
                        <Grid item key={cartitem.productID}>
                            <CartItem cartitem={cartitem} products={products} UpdateCart={UpdateCart} />
                        </Grid>
                    ))}
                </Grid>
            </main>
            <footer className="bg-pink-100 text-pink-700 font-bold text-2xl p-8 text-center">
                <div className="inline-block w-full">
                    <h1 className="mr-8">SUBTOTAL: $ {subtot.toFixed(2)}</h1>
                </div>
                <div className="w-full inline-block">
                <button className="bg-green-400 opacity-75 hover:opacity-100 text-green-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold mr-8 mt-4" onClick = {() => alert("Thank you for your patronage!")}><span className="-ml-2 mr-2"></span> CHECK OUT</button>
                </div>
                <Link to='/'>
                    <button className="bg-red-400 opacity-75 hover:opacity-100 text-red-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold mt-4"><span className="-ml-2 mr-2"></span> CONTINUE SHOPPING</button>
                </Link>
            </footer>
        </div> 
    )  
}

export default Cart;