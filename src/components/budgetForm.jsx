import React from 'react';
import Form from "./helper_functions/form"
import Joi from "joi"
import _ from "lodash"
import Input from "./common/input"
import DropDownInput from "./common/dropDownInput"

class BudgetForm extends Form {
    state = {
        data : {
            category: undefined,
            amount: undefined,
            activeMonth: undefined,
            activeYear: undefined
        },
        categories : [
            {name: "groceries", label : "Groceries"},
            {name: "entertainment", label : "Entertainment"},
            {name: "travel", label: "Travel"},
            {name: "rent", label: "Rent"},
            {name: "utilities", label: "Utilities"},
            {name: "dining", label: "Dining"},
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
        schema : Joi.object({
           category: Joi.string().required().min(1).max(14).label("Category"),
           amount: Joi.number().required().min(0).max(10000).label("Amount"),
           activeMonth: Joi.string().required().label("Month"),
           activeYear: Joi.number().required().min(2018).max(2100).label("Year")
        }),
        errors : {}   
    }

    handleBudgetChange = async ({currentTarget: input}) => {
        const {
            activeMonth, 
            activeYear, 
            years, 
            months
        } = this.props

        if(months.length !== 0 && years.length !==0 && activeMonth >=0 ){
            const data = {...this.state.data}
            
            data.activeMonth = months[activeMonth].name
            data.activeYear = years[activeYear].name
            data[input.name] = input.value;
        
            this.setState({data})
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("submited")
        const {onSubmit} = this.props
        const {data} = this.state
        const errors = this.validateProperty()
        
        this.setState({errors})
        
        if(_.isEmpty(errors)){
            onSubmit(data)
        }
        
    }

    render() { 
        const {activeMonth} = this.props
        const {
            data, 
            categories, 
            errors
        } = this.state

        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    
                    <h1><div className="badge badge-pill badge-success">Change Budget</div></h1>
                    <div className="container">
                        <div className="input-group mb-3 w-50">
                            <DropDownInput 
                                label="Category"
                                name="category"
                                value={data.value}
                                options={categories}
                                optionLabel="Choose..."
                                onChange={this.handleBudgetChange}
                                errors={errors}
                            />
                        </div>
                        <div className="form-group w-25">
                            <Input 
                                label="Budgeted Amount"
                                name="amount"
                                value={data.amount}
                                onChange={this.handleBudgetChange}
                                errors={errors}
                                type="number"
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary" 
                            disabled={activeMonth >= 0 ? false : true}
                        >Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default BudgetForm;