import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const InputForm = ({ setExpenseData }) => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
      />

      <SelectField
          label='Category'
          id="category"
          value={expense.category}
          name="category"
          onchange={handleChange}
          options = {["Grocery", "Clothes", "Bills", "Education", "Medicine" ]}
          defaultOption = 'Select Category'
        />

      <InputField
      label = 'Amount'
        type="text"
        id="Amount"
        name="amount"
        value={expense.amount}
        onchange={handleChange}
      />
      <div className="submit_btn mt-5">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default InputForm;