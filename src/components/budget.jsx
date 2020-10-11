import React, { Component } from 'react';
import BudgetTable from "./budgetTable"
import BudgetForm from "./budgetForm"
import ListGroup from "./common/listGroup"
import {Switch, Route} from "react-router-dom"
import {getBudget} from "../services/budgetService"

// Items to Add
// Active State to the NavBar


class Budget extends Component {
    state = {  
        budget: [],
        list: [
            {_id: 1, name: "April"},
            {_id: 2, name: "May"},
            {_id: 3, name: "June"},
            {_id: 4, name: "July"},
        ],
        activeMonth: 1,
    }

    // Budget Data 
    // _id : ObjectID("5f7345345")
    // category: "name"
    // spent: 100
    // budget: 200 

    handleChangeBudget = (changeData)  =>  {
        // console.log("Change Data", changeData)
    } 

    async componentDidMount() {
        
        const {data: budget} = await getBudget()
        // console.log("budget", budget)
        this.setState({budget})
        
    }
    handleChangeEvent = (month) => {
        // console.log("Event Changed: ", month)
        this.setState({activeMonth: month})
    }

    render() { 
        const { budget, list, activeMonth } = this.state
        return ( 
        <div>
            {/* <NavBar
                data={list}
                activeClass={activeMonth}
                handleChangeEvent={this.handleChangeEvent}
                textProperty="name"
                valueProperty="name"
            /> */}
            <ListGroup 
                items={list}
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
                    <BudgetForm />
                </div>
            </div>
            
            
            {/* <Switch>
                {list.map( month => (
                    <Route key={month._id} 
                    path={`/main/:item/${month.name}`} exact >
                        <BudgetTable props={list} />
                    </Route>
                ))}
                <Route path="/main/:item/form">
                    <BudgetForm changeBudget={this.handleChangeBudget}/>
                </Route>
            </Switch> */}
        </div> );
    }
}
 
export default Budget;