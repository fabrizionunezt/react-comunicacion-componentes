import "./ExpenseItemDate.css";

const ExpenseItemDate = (props) => {
  const month = props.date.toLocaleString("es-AR", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("es-AR", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseItemDate;
