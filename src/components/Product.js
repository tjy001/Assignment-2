import React from 'react'
import {Link} from 'react-router-dom';

const Product = ({product}) => {
    return (
        <Link to={{
            pathname:`/product/${product.id}`, 
            product:{product}
        }}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={product.image.replace('https://fakestoreapi.com/', 'https://fakestoreapi.herokuapp.com/')}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="font-bold text-gray-700 text-base">{(product.price).toFixed(2)}</p>
            </div>
        </div>
        </Link>
    )
}

export default Product
