import React, { useContext, useState } from 'react';
// GlobalProvider
import { GlobalContext } from '../context/GlobalState';

const Product = ({ items }) => {
    const { addTransaction, increaseQuantity } = useContext(GlobalContext);
    const { transactions } = useContext(GlobalContext);
    const [size, setSize] = useState(0);

    const handleAddToCart = (item) => {
        const exist = Object.values(transactions).find(element => element.id === item.id);

        if(exist) {
            return() => {
                increaseQuantity(item.id);
            }
        } else {
            return () => {
                const newTransaction = {
                        id: item.id,
                        name: item.name,
                        img: item.img,
                        price: item.price,
                        quantity: 1,
                        size: size
                }
                addTransaction(newTransaction);
            }
        }
    }

    return (
        <>
            {items.map((item) => {
                return (
                    <div className="container row">
                    <div className="col-md-6 col-sm-12">
                        <img style={{ width: '100%' }} src={item.img}></img>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h3>{item.name}</h3>
                        <h5 style={{fontWeight:'bold'}}>£{item.price}</h5>
                        <p>                
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </p>
                        <p>{item.description}</p>
                        <div className="d-flex flex-row">
                            {(item.sizes).map((size, index) => {
                                if(Object.values(size) == 0){
                                    return(
                                        <button 
                                            type="button" 
                                            key={index} 
                                            className="btn btn-outline-secondary btn-sm btn-strike"                                        disabled data-bs-toggle="button" 
                                            autocomplete="off"
                                            onClick = {() => setSize(size = Object.keys(size))}
                                        >
                                            {Object.keys(size)}
                                        </button>
                                    )
                                } else {
                                    return (
                                        <button 
                                            type="button" 
                                            key={index} 
                                            className="btn btn-outline-secondary btn-sm" 
                                            onClick = {() => setSize(size = Object.keys(size))}
                                        >
                                            {Object.keys(size)}
                                        </button>
                                    )
                                }
                            })}
                        </div>
                        <p><a href="#" style={{fontWeight:'bold'}}> Size guide</a></p>
                        <p>Need help?</p>
                            {(item.qty == 0)? (
                                    <p><small>Currently out of stock</small></p>
                                ) : (
                                   ""
                                )
                            }
                            {(item.qty == 0)? (
                                    <button 
                                        type="button" 
                                        className="btn btn-secondary btn-sm" 
                                        disabled data-bs-toggle="button" 
                                        autocomplete="off"
                                    >
                                        Add to Cart
                                    </button>
                                ) : (
                                    <button 
                                        type="button" 
                                        className="btn btn-secondary btn-sm" 
                                        onClick={handleAddToCart(item)}
                                    >
                                        Add to Cart
                                    </button>
                                )
                            }
                        </div>
                    </div>
                )
            })}
 
            </>
    )
}

export default Product