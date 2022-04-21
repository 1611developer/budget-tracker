import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item)=> {
        return (total += item.cost);

    //remeber to always specify your starting value
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: ${totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;