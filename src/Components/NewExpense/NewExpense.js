
import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense(props){

    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const [isEditing, setIsEditing] =useState(false);

    const startEditingHandler = () =>{
        setIsEditing(true);
    };

    const stopEditingHandler = () =>{
        setIsEditing(false);
    };

    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Button</button>}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData ={saveExpenseDataHandler}/>}
        </div>
    );

}

export default NewExpense;