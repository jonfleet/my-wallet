import React from 'react';
import BudgetTable from "./budgetTable"
import BudgetForm from "./budgetForm"
import ListGroup from "./common/listGroup"
import { getBudget } from "../services/budgetService"
import { getReport } from '../services/reportService';

// Items to Add
// Active State to the NavBar


class Budget extends ListGroup {
    state = {  
        
        budget: [
            {category: "Groceries", budget: undefined, spent: undefined },
            {category: "Entertainment", budget: undefined, spent: undefined },
            {category: "Travel", budget: undefined, spent: undefined },
            {category: "Rent", budget: undefined, spent: undefined },
            {category: "Utilities", budget: undefined, spent: undefined },
            {category: "Dining", budget: undefined, spent: undefined }
        ],
        months: [
            {_id: 0, name: "Select Month", status: true},
            {_id: 1, name: "January", status: false},
            {_id: 2, name: "February", status: false},
            {_id: 3, name: "March", status: false},
            {_id: 4, name: "April", status: false},
            {_id: 5, name: "May", status: false},
            {_id: 6, name: "June", status: false},
            {_id: 7, name: "July", status: false},
            {_id: 8, name: "August", status: false},
            {_id: 9, name: "September", status: false},
            {_id: 10, name: "October", status: false},
            {_id: 11, name: "November", status: false},
            {_id: 12, name: "December", status: false},
        ],
        activeMonth: 1,
    }
    
    // Event Handlers 
    
    handleChangeEvent = (month) => {
        this.setState({activeMonth: month})
    }

    // Hooks
    async componentDidMount() {
        const {data : budgetData} = await getBudget()
        console.log("Budget Data: ", budgetData)
        this.setState({budget: budgetData})

        const {data: reportData} = await getReport()
        this.setState({data: reportData})
        
        const months = this.groupItemStatus()
        this.setState({months})
        
    }
    
    // Calcuate Spent Totals

    // Modify Budget Table
    changeTable = changeOptions => {
        const newBudget = [...this.state.budget]
        
        const index = this.state.budget.findIndex(item => item.category == changeOptions.category)
        newBudget[index]  = {...newBudget[index], budget: changeOptions.amount, spent: 0 }
        
        this.setState({budget : newBudget})
    }

    render() { 
        const { budget, months, activeMonth } = this.state
        
        return ( 
        <div className="ml-4">
            <ListGroup 
                items={months}
                onItemSelect={this.handleChangeEvent}
                valueProperty="name"
                keyProperty="_id"
                activeClass={activeMonth}
            />
            
            <div className="row">
                <div className="col-3">
                    <BudgetTable items={budget} />
                </div>
                <div className="col">
                    <BudgetForm 
                    onSubmit={this.changeTable}
                    />
                </div>
            </div>

        </div> );
    }
}
 
export default Budget;


// calculateTotalSpent() {
//     this.resetSpent()
//     const {data, activeMonth, months, budget} = this.state
//     const monthSpending = data.filter(item => item.month == months[activeMonth].name)
//     // console.log("Month Spending: ", monthSpending)
//     const newBudget = [...budget]
//     // newBudget[0].spent+=1
//     // console.log(newBudget)
//     for(let i = 0; i < newBudget.length; i++){
//         for (let j = 0; j < monthSpending.length; j++){
//             // console.log(newBudget[i].category, monthSpending[j].category)
//             if(newBudget[i].category.toUpperCase() == monthSpending[j].category.toUpperCase()){
//                 // console.log(monthSpending[j].amount)
//                 newBudget[i].spent += monthSpending[j].amount
//             }
//         }
//     }
//     this.setState({budget: newBudget})
//     console.log("Calced: ", newBudget)
// }

// resetSpent (){
//     let {budget } = this.state
//     let resetSpent = [...budget]
//     // let resetSpent = [
//     //     {_id: 1, cat: "dumb", spent: 12}
//     // ]
//     console.log("Spent Reset: ", resetSpent)
//     for (let i = 0; i < resetSpent.length; i ++){
//         console.log(resetSpent[i].spent)
//         // resetSpent[i].spent = 0
//     }
//     // resetSpent[0].spent = 5
//     console.log("Spent Reset: ", resetSpent)
//     return resetSpent
// }