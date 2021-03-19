import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ShoppingCart} from '@material-ui/icons';

const Nav = ({cartitems, cart}) => {
    return (
        <nav className="flex items-center px-6 py-6 justify-between bg-gray-700">
                <div className="text-white">
                    <Link to="/">
                        <div className="text-xl">Home</div>
                    </Link>
                </div>
                <div className="right-0 flex items-center pr-2 sm:ml-6 sm:pr-0">
                    <div className="ml-3 relative">
                        <div>
                            <Link to="/cart">
                                <button type="button" className="text-white flex text-sm rounded-full focus:outline-none" aria-expanded="false" aria-haspopup="true">
                                    <ShoppingCart fontSize="large"/>
                                </button>
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{cartitems}</span>
                            </Link>
                        </div>
                    </div>
                </div>
        </nav>
    )
}

export default Nav;