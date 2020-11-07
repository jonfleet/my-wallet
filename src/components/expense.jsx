import React, { Component } from 'react';
import {postExpense} from "../services/postExpense"
import {getCurrentUser} from "../services/authService"

// Put Selected values in the account placholder $XX.XX

class Expense extends Component {
    state = { 
        userId: "",
        description: "test",
        category: "groceries",
        day: "1",
        month: "january", 
        year : "2020",
        amount: "10",
        account: "visa",
     }

    componentDidMount() {
        const { _id } = getCurrentUser()
        this.setState({userId: _id })
    }

    handleChange = ({currentTarget : input}) => {
        const state = {...this.state}
        
        state[input.name] = input.value
        this.setState(state)
        console.log(this.state)
    }
        
    render() { 
        const { description, category, day, month, year, amount, account } = this.state;
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May", 
            "June", 
            "July", 
            "August",
            "September",
            "October",
            "November",
            "December"
        ]
        const years = [2020,2021,2022,2023,2024]
        return ( 
            <div className="m-2">
                <h1>Add Expense</h1> 
                <form className="m-2 w-50">
                    <div className="form-group">
                        <label>Description</label>
                        <input name="description" value={description} onChange={this.handleChange} type="email" className="form-control" id="exampleFormControlInput1"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="CategoryAddExpense">Category</label>
                        <select className="custom-select" id="CategoryAddExpense" name="category" value={category} onChange={this.handleChange}>
                            <option >Choose...</option>
                            <option value="groceries">Groceries</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="travel">Travel</option>
                            <option value="rent">Rent</option>
                            <option value="utilities">Utilities</option>
                            <option value="dining">Dining</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <div className="col-2">
                            <label>Day</label>
                            <select className="custom-select" id="CategoryAddExpense" type="number" name="day" value={day} onChange={this.handleChange}>
                                <option>DD</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            {/* <input name="day" value={day} onChange={this.handleChange} type="number" className="form-control" placeholder="DD"></input> */}
                        </div>
                        <div className="col-4">
                            <label>Month</label>
                            <input type="text" className="form-control" value={month} placeholder="Month.." name="month" onChange={this.handleChange} id="CategoryAddExpense"/>
                            {/* <select className="custom-select" id="CategoryAddExpense" type="month" name="month" value={month} onChange={this.handleChange}>
                                <option>Month</option>
                                {months.map(month => (
                                    <option value={month}>{month}</option>
                                ))}
                            </select> */}
                            {/* <input name="month" value={month} onChange={this.handleChange} type="text" className="form-control" placeholder="MM"></input> */}
                        </div>
                        <div className="col">
                            <label>Year</label>
                            <select className="custom-select" id="CategoryAddExpense" type="number" name="year" value={year} onChange={this.handleChange}>
                                <option>YYYY</option>
                                {years.map(year => (
                                    <option value={year}>{year}</option>
                                ))}
                            </select>
                            {/* <input name="year" value={year} onChange={this.handleChange} type="number" className="form-control" placeholder="YYYY"></input> */}
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input name="amount" value={amount} onChange={this.handleChange} type="number" className="form-control" id="exampleFormControlInput1" placeholder="$XXX.XX"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="AccountAddExpense" >Account</label>
                        {/* <input name="account" value={account} onChange={this.handleChange} type="email" className="form-control" id="exampleFormControlInput1"></input> */}
                        <select className="custom-select" id="AccountAddExpense" name="account" value={account} onChange={this.handleChange}>
                            <option >Choose...</option>
                            <option value="Visa">Visa</option>
                            <option value="AmericanExpress">American Express</option>
                            <option value="Discover">Discover</option>
                            <option value="Mastercard">Mastercard</option>
                        </select>
                    </div>
                </form>
                <button onClick={() => postExpense(this.state)} className="btn btn-primary">Add Expense</button>
            </div>
         );
    }
}
 
export default Expense;