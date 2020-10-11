import React, {Component} from 'react';

class BudgetForm extends Component {
    state = {
        changeOptions : {
            Category: "",
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
        // const {changeBudget} = this.props
        // console.log(this.props)
        return (
            <div className="container mt-3">
                <form action="">
                    <div className="m-2">
                        <h2>Change Budget</h2>
                    </div>
                    <div className="input-group mb-3 w-50">
                        
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlfor="inputGroupSelect01">Category</label>
                        </div>
                        <select name="category" value={this.state.changeOptions.category} onChange={this.handleChange}className="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
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
                        <input name="amount" value={this.state.changeOptions.amount} onChange={this.handleChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="$_.__"></input>
                    </div>
                    <button onClick={() => this.props.changeBudget(this.state.changeOptions)} className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
 
export default BudgetForm;