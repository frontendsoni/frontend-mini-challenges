import React, { useState } from 'react'
import InputForm from './InputForm'
import ExpenseTable from './ExpenseTable'
import ExpenseTrackerData from './ExpenseTrackerData'

const ExpenseTracker = () => {
  const [expenseData, setExpenseData] = useState(ExpenseTrackerData)

  return (
    <div className='mt-10 max-w-7xl mx-auto p-3'>
      <h2 className='font-medium text-3xl mb-5'>Track Your Expense</h2>
      <div className="tracker_wrap flex flex-col md:flex-row gap-x-7 ">
        <InputForm setExpenseData = {setExpenseData} />
        <ExpenseTable expense = {expenseData} />
      </div>
    </div>
  )
}

export default ExpenseTracker