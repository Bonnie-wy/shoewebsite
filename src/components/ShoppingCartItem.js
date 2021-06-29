import React, { useContext } from 'react';
// GlobalProvider
import { GlobalContext } from '../context/GlobalState';
// Fontawesome
import { FaTimes } from 'react-icons/fa';

const ShoppingCartItem = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const { increaseQuantity, decreaseQuantity } = useContext(GlobalContext);

    const handleAdd = (transaction) => {
        return() => {
            increaseQuantity(transaction.id)
        }
    }

    const handleMinus = (transaction) => {
        return() => {
            decreaseQuantity(transaction.id)
        }
    }

    return (   
        <>
            <div>
                <div className="flex shoppingCartItemContainer">
                    <div className="item_delete">
                        <button 
                            className="btn-delete" 
                            onClick={() => deleteTransaction(transaction.id)}
                        >
                            <FaTimes style={{ color: 'red', cursor: 'pointer' }} />
                        </button> 
                    </div>
                    <div className="item_name">
                        <p className="float-left">{ transaction.name } </p>
                        <p> Size: { transaction.size }</p>
                    </div>
                    <div className="item_plus_minus">
                        <button 
                            onClick={handleAdd(transaction)} 
                            className="btn btn-outline-secondary btn-sm btn-plus"
                        >
                            +
                        </button>
                        <button 
                            onClick={handleMinus(transaction)} 
                            className="btn btn-outline-secondary btn-sm btn-minus"
                        >
                            -
                        </button>
                    </div>
                    <div className="item_total text-align-right">
                        <p>
                            { transaction.quantity } x £{ transaction.price }
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCartItem