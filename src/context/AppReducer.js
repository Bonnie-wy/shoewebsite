const Reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

        case 'INCREASE_QUANTITY':
            let newTransactions = state.transactions.map((transaction) => {
                if (transaction.id === action.payload) {
                  return { ...transaction, quantity: transaction.quantity + 1 };
                } else {
                  return transaction;
                }
              });
        
              return {
                ...state,
                transactions: newTransactions,
              };     

        case 'DECREASE_QUANTITY':
            let newTransaction = state.transactions.map((transaction) => {
                if (transaction.id === action.payload && transaction.quantity > 0) {
                  return { ...transaction, quantity: transaction.quantity - 1 };
                } else {
                  return transaction;
                }
              });
        
              return {
                ...state,
                transactions: newTransaction,
              };     

        default:
            return state;
    }
}

export default Reducer;