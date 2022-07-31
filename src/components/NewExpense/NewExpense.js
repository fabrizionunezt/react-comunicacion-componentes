import { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onNewExpense(expenseData);
    setShowForm(false);
  };
  const addNewExpenseHandler = () => {
    setShowForm((showFormP) => !showFormP);
  };
  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {showForm && (
        <NewExpenseForm
          cancel={addNewExpenseHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
