import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const InputForm = ({ setExpenseData }) => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [errors, setErrors] = useState({})

  const validationConfig = {
      title: [{required:true, message: 'Please enter title'},
        {minLength:3, message: 'The length of the title should 3 characters long'}
      ],
      category: [{required:true, message: 'Please enter category'}],
      amount: [{required:true, message: 'Please enter amount'}]
  }

  const validate = (formData) => {
    const errorsData = {}

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if(rule.required && !value) {
          errorsData[key] = rule.message;
          return true
        }
        if(rule.minLength && value.length < 3) {
          errorsData[key] = rule.message;
          return true
        }
      })
    })
    setErrors(errorsData);
    return errorsData
  }

  const handleSubmit = (e) => {
    e.preventDefault();

   const validateResult =  validate(expense);
   if (Object.keys(validateResult).length) return

    setExpenseData((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    setExpense((prevState) => ({ ...prevState, [name]: e.target.value }));
    setErrors({})
  };
  return (
    <form className="expense-form flex-1" onSubmit={handleSubmit}>
      <InputField
        type="text"
        id="title"
        name="title"
        label="Title"
        value={expense.title}
        onchange={handleChange}
        error = {errors.title}
      />

      <SelectField
          label='Category'
          id="category"
          value={expense.category}
          name="category"
          onchange={handleChange}
          options = {["Grocery", "Clothes", "Bills", "Education", "Medicine" ]}
          defaultOption = 'Select Category'
          error = {errors.category}
        />

      <InputField
        label = 'Amount'
        type="text"
        id="Amount"
        name="amount"
        value={expense.amount}
        onchange={handleChange}
        error = {errors.amount}
      />
      <div className="submit_btn mt-5">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default InputForm;