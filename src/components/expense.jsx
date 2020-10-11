import React, { Component } from 'react';
import {postExpense} from "../services/postExpense"
// Put Selected values in the account placholder $XX.XX

class Expense extends Component {
    state = { 
        entry: {
            description: "",
            category: "",
            date: "",
            amount: "",
            account: "",
        }
     }

    handleChange = ({currentTarget : input}) => {
        // console.log(input.value)
        const entry = {...this.state.entry}
        entry[input.name] = input.value
        this.setState({entry})
        // console.log(this.state.entry)
    }
        
    render() { 
        const { entry } = this.state;
        return ( 
            <div className="m-2">
                <h1>Add Expense</h1> 
                <form className="m-2 w-50">
                    <div className="form-group">
                        <label>Description</label>
                        <input name="description" value={entry.description} onChange={this.handleChange} type="email" className="form-control" id="exampleFormControlInput1"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="CategoryAddExpense">Category</label>
                        <select className="custom-select" id="CategoryAddExpense" name="category" value={entry.category} onChange={this.handleChange}>
                            <option selected>Choose...</option>
                            <option value="groceries">Groceries</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="travel">Travel</option>
                            <option value="rent">Rent</option>
                            <option value="utilities">Utilities</option>
                            <option value="dining">Dining</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input name="date" value={entry.date} onChange={this.handleChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="DD/MM/YYYY"></input>
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input name="amount" value={entry.value} onChange={this.handleChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="$XXX.XX"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="AccountAddExpense" >Account</label>
                        {/* <input name="account" value={entry.account} onChange={this.handleChange} type="email" className="form-control" id="exampleFormControlInput1"></input> */}
                        <select className="custom-select" id="AccountAddExpense" name="account" value={entry.account} onChange={this.handleChange}>
                            <option selected>Choose...</option>
                            <option value="Visa">Visa</option>
                            <option value="AmericanExpress">American Express</option>
                            <option value="Discover">Discover</option>
                            <option value="Mastercard">Mastercard</option>
                        </select>
                    </div>
                </form>
                <button onClick={() => postExpense(this.state.entry)} className="btn btn-primary">Add Expense</button>
            </div>
         );
    }
}
 
export default Expense;