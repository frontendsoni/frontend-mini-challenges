import React, { useState } from 'react'

const InputForm = ({setExpenseData}) => {
  const [expense, setExpense] = useState({
    title:'',
    category: '', 
    amount: ''  
  })


const handleSubmit = (e) => {
  e.preventDefault()
  setExpenseData((prevState) => ([...prevState, {...expense, id: crypto.randomUUID()}]))
  
  setExpense({
    title:'',
    category: '', 
    amount: ''  
  })
}


  return (
    <form className='expense-form flex-1' onSubmit={handleSubmit}>
      <div className="form_input mb-3">
        <label htmlFor="title">Title</label>
        <input type="text" id='title' value={expense.title} onChange={(e) => setExpense((prevState) =>({...prevState, title: e.target.value}))}  />
      </div>
      <div className="form_input mb-3">
        <label htmlFor="category">Category</label>
        <select  id='category' value={expense.category} onChange={(e) => setExpense((prevState) =>({...prevState, category: e.target.value}))}>
          <option value="" hidden>Select Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="form_input mb-3">
        <label htmlFor="amount">Amount</label>
        <input type="text" id='amount' value={expense.amount} onChange={(e) => setExpense((prevState) =>({...prevState, amount: e.target.value}))}/>
      </div>
      <div className="submit_btn mt-5">
        <button type='submit' >Add</button>
      </div>
    </form>
  )
}

export default InputForm