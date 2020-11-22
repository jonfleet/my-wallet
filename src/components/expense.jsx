import React from 'react';
import {postExpense} from "../services/postExpense"
import {getCurrentUser} from "../services/authService"

import Joi from "joi"
import _ from "lodash"

import Input from "./common/input"
import DropDownInput from "./common/dropDownInput"
import Form from "./helper_functions/form"

// Put Selected values in the account placholder $XX.XX

class Expense extends Form {
    state = { 
        data : {
            userId: "",
            description: "",
            category: "",
            day: "",
            month: "", 
            year : "",
            amount: "",
            account: "",
        },
        dataLabel: {
            userId: "",
            description: "",
            category: "",
            day: "",
            month: "",
            year: "",
            amount: "",
            account: ""
        },
        schema : Joi.object({
            userId: Joi.string().required().label("UserId"),
            description: Joi.string().min(1).max(200).required().label("Description"),
            category : Joi.string().min(1).max(20).required().label("Category"),
            day: Joi.number().min(1).max(31).required().label("Day"),
            month: Joi.string().min(1).max(9).required().label("Month"),
            year: Joi.number().required().min(2018).max(2100).label("Year"),
            amount: Joi.number().min(1).max(100000).required().label("Amount"),
            account: Joi.string().min(1).max(16).required().label("Account")
        }),
        errors: {},
        categories : [
            {name: "groceries", label : "Groceries"},
            {name: "entertainment", label : "Entertainment"},
            {name: "travel", label: "Travel"},
            {name: "rent", label: "Rent"},
            {name: "utilities", label: "Utilities"},
            {name: "dining", label: "Dining"},
        ],
        days : [
            {name: 1, label: "1"},
            {name: 2, label: "2"},
            {name: 3, label: "3"},
            {name: 4, label: "4"},
            {name: 5, label: "5"},
            {name: 6, label: "6"},
            {name: 7, label: "7"},
            {name: 8, label: "8"},
            {name: 9, label: "9"},
            {name: 10, label: "10"},
            {name: 11, label: "11"},
            {name: 12, label: "12"},
            {name: 13, label: "13"},
            {name: 14, label: "14"},
            {name: 15, label: "15"},
            {name: 16, label: "16"},
            {name: 17, label: "17"},
            {name: 18, label: "18"},
            {name: 19, label: "19"},
            {name: 20, label: "20"},
            {name: 21, label: "21"},
            {name: 22, label: "22"},
            {name: 23, label: "23"},
            {name: 24, label: "24"},
            {name: 25, label: "25"},
            {name: 26, label: "26"},
            {name: 27, label: "27"},
            {name: 28, label: "28"},
            {name: 29, label: "29"},
            {name: 30, label: "30"},
            {name: 31, label: "31"}
        ],
        months: [
            {name: "january", label: "January"},
            {name: "february", label :"February"},
            {name: "march", label: "March"},
            {name:"april", label: "April"},
            {name: "june", label :"June"}, 
            {name: "july", label :"July"},
            {name: "august", label :"August"},
            {name: "may", label :"May"}, 
            {name: "september", label : "September"},
            {name: "october", label :"October"},
            {name: "november", label : "November"},
            {name: "december", label :"December"}
        ],
        years :[
            {name: 2018, label: "2018"},
            {name: 2019, label: "2019"},
            {name: 2020, label: "2020"},
            {name: 2021, label: "2021"},
            {name: 2022, label: "2022"},
            {name: 2023, label: "2023"},
            {name: 2024, label: "2024"},
            {name: 2025, label: "2025"}
        ], 
        accounts : [
            {name: "Visa" , label: "Visa"},
            {name: "American Express", label: "American Express"},
            {name: "Discover", label: "Discover"},
            {name: "Mastercard", label: "Mastercard"},
        ]
     }

    componentDidMount() {
        const { _id } = getCurrentUser()
        const data = {...this.state.data}
        data.userId = _id
        this.setState({data})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {data} = this.state
        const errors = this.validateProperty()
        this.setState({errors})
        
        if(_.isEmpty(errors)){
            postExpense(data)
        }
    }
        
    render() { 
        const { 
            categories,  
            days, 
            months, 
            years, 
            accounts, 
            errors, 
        } = this.state;

        const { description, 
                category, 
                day,
                month, 
                year, 
                amount, 
                account
        } = this.state.data 
        
        return ( 
            <div className="m-2">
                <p className="h1"><span className="badge badge-pill badge-success">Add Expense</span></p> 
                {/* <form onSubmit={() => postExpense(this.state)} className="m-2 w-50"> */}
                <form onSubmit={this.handleSubmit} className="mt-4 w-50">
                    <div className="form-group">
                        <Input 
                            label="Description"
                            name="description"
                            value={description}
                            onChange={this.handleChange}
                            errors={errors}
                            type="text"
                        />
                    </div>
                    <div className="mb-3">
                        <DropDownInput 
                            label="Category"
                            name="category"
                            value={category}
                            options={categories}
                            optionLabel="Choose..."
                            onChange={this.handleChange}
                            errors={errors}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col-2">
                            <DropDownInput 
                                label="Day"
                                name="day"
                                value={day}
                                options={days}
                                optionLabel="Day"
                                onChange={this.handleChange}
                                errors={errors}
                            />
                        </div>
                        <div className="col-4">
                            <DropDownInput 
                                label="Month"
                                name="month"
                                value={month}
                                options={months}
                                optionLabel="Month"
                                onChange={this.handleChange}
                                errors={errors}
                            />
                        </div>
                        <div className="col">
                            <DropDownInput 
                                label="Year"
                                name="year"
                                value={year}
                                options={years}
                                optionLabel="Year"
                                onChange={this.handleChange}
                                errors={errors}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <Input 
                            label="Amount"
                            name="amount"
                            value={amount}
                            onChange={this.handleChange}
                            errors={errors}
                            type="number"
                        />
                    </div>
                    <div className="form-group">
                        <DropDownInput 
                                label="Account"
                                name="account"
                                value={account}
                                options={accounts}
                                optionLabel="Account"
                                onChange={this.handleChange}
                                errors={errors}
                        />
                    </div>
                    <button className="btn btn-primary">Add</button>
                </form>
            </div>
         );
    }
}
 
export default Expense;