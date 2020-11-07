import React from 'react';

const BudgetTable = (props) => {
    // console.log("Props: ", props)
    const {data} = props
    
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
                {data ? data.map(item => (
                    <tr key={item.category}>
                        <td>{item.category}</td>
                        <td>{item.spent}</td>
                        <td>{item.budget}</td>
                    </tr>
                )): null}
            </tbody>
        </table>
      );
}
 
export default BudgetTable;