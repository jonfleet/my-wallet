import React, {Component} from 'react';

class BudgetForm extends Component {
    state = {
        changeOptions : {
            category: undefined,
            amount: null,
        }   
    }

    handleChange = ({currentTarget: input}) => {
        const changeOptions = {...this.state.changeOptions}
        changeOptions[input.name] = input.value;
        this.setState({changeOptions})
        // console.log(this.state.changeOptions)
    }

    render() { 
        const {onSubmit} = this.props
        const {changeOptions} = this.state
        console.log(changeOptions)
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
                            <option value="Groceries">Groceries</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Travel">Travel</option>
                            <option value="Rent">Rent</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Dining">Dining</option>
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