import React, {useState, useEffect} from 'react';
import {ShoppingCart} from '@material-ui/icons';
import {useParams, useHistory} from 'react-router-dom';

const ProductPage = ({products, AddToCart}) => {
    const { prodid } = useParams();
    const [qty, setQty] = useState(0);
    const [product, setProduct] = useState({});
    const result = products.find(({ id }) => id == prodid);
    const history = useHistory();
    
    useEffect(() => {
        setProduct(result);
    }, []);

    return (
        <div>
            <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div className="relative">
                                <img src={String(product.image).replace('https://fakestoreapi.com/', 'https://fakestoreapi.herokuapp.com/')} className="w-full relative z-10" alt=""/>
                                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl mb-5">{product.title}</h1>
                                <p className="text-sm">{product.description}</p>
                            </div>
                            <div>
                                <div className="align-bottom mb-5">
                                    <span className="text-2xl leading-none align-baseline">$</span>
                                    <span className="font-bold text-5xl leading-none align-baseline">{product.price}</span>
                                </div>
                                <div className="inline-block align-bottom mr-20">
                                    <div className="custom-number-input h-10 w-32">
                                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                            <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none" onClick={() => {setQty(qty-1 < 0 ? 0 : qty - 1)}}>
                                                <span className="m-auto text-2xl font-thin">−</span>
                                            </button>
                                            <input value={qty} id="qty" type="number" inputmode="numeric" min="0" max="99999" className="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" onChange={e => setQty(parseInt(e.target.value, 10))}/>
                                            <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer" onClick={() => {setQty(qty+1 > 99999 ? 99999 : qty +1 )}}>
                                                <span className="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-block align-bottom mt-5">
                                    <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold" onClick={() => {parseInt(document.getElementById('qty').value, 10) && AddToCart(parseInt(prodid, 10), parseInt(document.getElementById('qty').value, 10))}}><span className="-ml-2 mr-2"><ShoppingCart/></span> ADD TO CART</button>
                                </div>
                                <div className="align-bottom mt-10">
                                    <button className="bg-green-300 opacity-75 hover:opacity-100 text-green-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold" onClick={() => history.goBack()}><span className="-ml-2 mr-2"></span> BACK TO PRODUCTS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
