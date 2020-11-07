import React from 'react';
import BudgetTable from "./budgetTable"
import BudgetForm from "./budgetForm"
import ListGroup from "./common/listGroup"

// Services
import { getBudget, getSpent, changeBudget} from "../services/budgetService"
import { getReport } from '../services/reportService';
import {getCurrentUser} from '../services/authService'

// Items to Add
// Active State to the NavBar


class Budget extends ListGroup {
    state = {  
        // budget: [
        //     {category: "groceries", label: "Groceries", budget: undefined, spent: undefined },
        //     {category: "entertainment", label: "Entertainment", budget: undefined, spent: undefined },
        //     {category: "travel", label: "Travel", budget: undefined, spent: undefined },
        //     {category: "rent", label: "Rent", budget: undefined, spent: undefined },
        //     {category: "utilities", label: "Utilities", budget: undefined, spent: undefined },
        //     {category: "dining", label: "Dining", budget: undefined, spent: undefined }
        // ],
        budget: {},
        months: [
            {_id: 0, name: "january", label: "Select Month", status: true},
            {_id: 1, name: "january", label: "January", status: false},
            {_id: 2, name: "february", label: "February", status: false},
            {_id: 3, name: "march", label: "March", status: false},
            {_id: 4, name: "april", label: "April", status: false},
            {_id: 5, name: "may", label: "May", status: false},
            {_id: 6, name: "june", label: "June", status: false},
            {_id: 7, name: "july", label: "July", status: false},
            {_id: 8, name: "august", label: "August", status: false},
            {_id: 9, name: "september", label: "September", status: false},
            {_id: 10, name: "october", label: "October", status: false},
            {_id: 11, name: "november", label: "November", status: false},
            {_id: 12, name: "december", label: "December", status: false},
        ],
        activeMonth: 1,
        activeYear: 2020,
    }
    
    // Event Handlers 
    
    handleChangeEvent = async (month) => {
        this.setState({activeMonth: month})
    }

    async getSpent() {
        const {data: spent} = await getSpent()
        this.setState({spent: spent})

    }
    // Hooks
    async componentDidMount() {
        // this.getBudget()
        const {data:{budget}} = await getSpent()
        console.log(budget["2020"].january)
        this.setState({budget: budget})

        const {data: reportData} = await getReport()
        this.setState({data: reportData})
        
        const months = this.groupItemStatus()
        this.setState({months})
    }

    async changeTable(changeOptions){
        // const {activeMonth, activeYear} = this.state 
        // const payload = {activeMonth , activeYear , ...changeOptions} 
        // console.log("Change Options", changeOptions)
        await changeBudget(changeOptions)
        window.location = "/main/budget"
    }
    
    render() { 
        const { budget, months, activeMonth, activeYear } = this.state
        let budgetData
        if(budget[activeYear]){
            budgetData = budget[activeYear][months[activeMonth].name]
        } else {
            budgetData = undefined
        } 
        return ( 
        <div className="ml-4">
            {/* <ListGroup 
            /> */}
            <ListGroup 
                items={months}
                onItemSelect={this.handleChangeEvent}
                valueProperty="label"
                keyProperty="_id"
                activeClass={activeMonth}
            />
            
            <div className="row">
                <div className="col-3">
                    <BudgetTable 
                        data={budgetData}
                        activeMonth={activeMonth}
                        activeYear={activeYear}
                    />
                </div>
                <div className="col">
                    <BudgetForm 
                    onSubmit={this.changeTable}
                    activeMonth={activeMonth}
                    activeYear={activeYear}
                    />
                </div>
            </div>
        </div> );
    }
}
 
export default Budget;

