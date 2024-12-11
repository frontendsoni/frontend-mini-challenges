import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useFilter } from '../../hooks/useFilter'

const ExpenseTable = ({expense}) => {
  const [filteredData, setQuery] = useFilter(expense, (data) => data.category)
  return (
    <div className="table_wrap flex-1 mt-8 md:mt-0">
      <table className='w-full'>
      <thead>
        <tr>
        <th>Title</th>
        <th>
        <select  id='category' onChange={(e) => setQuery(e.target.value)}>
          <option value="">All</option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
        </th>
        <th>
          <div className='flex justify-between'>
            <span>Amount</span>
            <span>
              <FontAwesomeIcon icon={faArrowUp} /> 
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
          </div>
        </th>
        </tr>
      </thead>
 
      <tbody>
      {
        filteredData?.map(({id, title, category, amount}) => {
             return (<tr key={id}>
               <td>{title}</td>
               <td>{category}</td>
               <td>₹{amount}</td>
             </tr>)
         })} 
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td></td>
          <td>
          ₹{expense && expense.reduce((sum, item) => sum + parseInt(item.amount), 0)}
          </td>
        </tr>
      </tfoot>
    </table>
    </div>
  )
}

export default ExpenseTable