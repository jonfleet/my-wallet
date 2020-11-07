import React, {Component} from 'react';


class BudgetForm extends Component {
    state = {
        changeOptions : {
            category: undefined,
            amount: undefined,
            activeMonth: undefined,
            activeYear: undefined
        },
        months: [
            'january',
            'february',
            'march',
            'april',
            'may',
            'june',
            'july',
            'august',
            'september',
            'october',
            'november',
            'december'
        ]   
    }

    handleChange = async ({currentTarget: input}) => {
        const {activeMonth, activeYear} = this.props
        const {months } = this.state
        
        const changeOptions = {...this.state.changeOptions}
        changeOptions.activeMonth = months[activeMonth-1]
        changeOptions.activeYear = activeYear
        changeOptions[input.name] = input.value;
        // await changeBudget(changeOptions)
        this.setState({changeOptions})
        // console.log(this.state.changeOptions)
        
        // console.log("state" ,this.state)

        
    }

    render() { 
        const {onSubmit} = this.props
        const {changeOptions} = this.state
        
        // console.log(activeMonth)

        return (
            <div className="container mt-3">
                <form action="">
                    <div className="m-2">
                        <h2>Change Budget</h2>
                    </div>
                    <div className="input-group mb-3 w-50">
                        
                        <div className="input-group-prepend">
                            <label 
                                className="input-group-text" 
                                htmlFor="inputGroupSelect01"
                            >
                            Category
                            </label>
                        </div>
                        <select 
                            name="category" 
                            value={this.state.changeOptions.category} 
                            onChange={this.handleChange}
                            className="custom-select" 
                            id="inputGroupSelect01"
                            >
                            <option >Choose...</option>
                            <option value="groceries">Groceries</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="travel">Travel</option>
                            <option value="rent">Rent</option>
                            <option value="utilities">Utilities</option>
                            <option value="dining">Dining</option>
                        </select>
                    </div>
                    <div className="form-group w-25">
                        <label>Budgeted Amount</label>
                        <input 
                         name="amount" 
                         value={this.state.changeOptions.amount} 
                         onChange={this.handleChange} 
                         type="number" 
                         className="form-control"
                         id="exampleFormControlInput1" 
                         placeholder="$_.__"
                        >
                        </input>
                    </div>
                    <button 
                        type="button" 
                        onClick={() => onSubmit(changeOptions)} 
                        className="btn btn-primary"
                    >
                    Submit
                    </button>
                </form>
            </div>
        );
    }
}
 
export default BudgetForm;