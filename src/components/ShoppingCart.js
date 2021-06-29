import React, { useContext } from 'react';
// GlobalProvider
import { GlobalContext } from '../context/GlobalState';
// Components
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(
        transaction => transaction.price * transaction.quantity
    );
    const total = amounts.reduce((acc, item) => (acc += item),0);

    return (   
        <>
            {transactions.length < 1? (
                <h4>Shopping bag is empty</h4>
            ) : (
                <div>
                    <h4>Shopping Bag</h4>
                    <div>
                        {transactions.map(transaction => 
                            <ShoppingCartItem 
                                key={transaction.id} 
                                transaction = {transaction}
                             />
                        )}
                        <div className="float-right total">
                            <p>Total £{total}</p>
                            <button type="button" className="btn btn-secondary btn-sm">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ShoppingCart