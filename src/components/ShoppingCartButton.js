import React, { useContext } from 'react';
// GlobalProvider
import { GlobalContext } from '../context/GlobalState';

const ShoppingCartButton = ({count}) => {
    const { transactions } = useContext(GlobalContext);

    // Calculate total quantity - render beside the shopping cart button
    const itemQuantities = transactions.map(
        transaction => transaction.quantity
    );
    const total = itemQuantities.reduce((acc, item) => (acc += item),0);
    
    return (   
        <>
            <button type="button" className="btn btnShoppingCart">
                <i className="fas fa-shopping-cart"> </i>  
                {(count == 0)? (
                    ""
                ) : (
                    <span 
                        className='badge rounded-pill bg-primary text-light' 
                        id='cartCount'
                    >
                        { total == 0? "" : total }
                    </span>
                )}
              </button>
        </>
    )
}

export default ShoppingCartButton