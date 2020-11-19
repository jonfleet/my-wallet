import React from 'react';

const BudgetTable = (props) => {
    
    const {data, activeMonth, activeYear} = props
    
    let budget = null
    
    if( activeMonth && activeYear) {
        budget = data[activeYear][activeMonth]    
    }
    
    return (
        <table className="table w-25">
            <thead className="thead-light">
                <tr>
                    <th className="">Category</th>
                    <th className="">Spent</th>
                    <th className="">Budget</th>
                </tr>
            </thead>
            <tbody>
                {budget ? budget.map(item => (
                    <tr key={item.category}>
                        <td>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</td>
                        <td>{"$" + item.spent}</td>
                        <td>{"$" + item.budget}</td>
                    </tr>
                )): null}
            </tbody>
        </table>
      );
}
 
export default BudgetTable;