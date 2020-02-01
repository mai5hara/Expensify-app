import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3>{ description }</h3>
        <p>{ amount } - { createdAt }</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
    </div>
);

// const ExpenseProps = (state) => {
//     return {
//         description: state.description,
//         amount: state.amount,
//         createdAt: state.createdAt
//     };
// };

export default connect()(ExpenseListItem);