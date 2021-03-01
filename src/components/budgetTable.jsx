import React from "react";

const BudgetTable = (props) => {
  const { data, activeMonth, activeYear } = props;

  let budget = null;

  if (activeMonth && activeYear) {
    budget = data[activeYear][activeMonth];
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Category</th>
            <th>Spent</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {budget
            ? budget.map((item) => (
                <tr key={item.category}>
                  <td>
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </td>
                  <td>{"$" + item.spent}</td>
                  <td>{"$" + item.budget}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
