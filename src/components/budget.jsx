import React from 'react';

// Components
import BudgetTable from "./budgetTable"
import BudgetForm from "./budgetForm"
import ListGroup from "./common/listGroup"

// Services
import { getBudget, changeBudget} from "../services/budgetService"
import { getReport } from '../services/reportService';


class Budget extends ListGroup {
    state = {  
        reportData : [],
        filteredData : [],
        budgetData: [],
        filteredBudgetData: [],
        months: [],
        activeMonth: -1,
        years : [],
        activeYear: 0,
    }
    
    
    // Hooks
    async componentDidMount() {
        // Query Budget Data
        const {data} = await getBudget()
        this.setState({budgetData : data.budget})

        // Query Report Data
        const {data: reportData} = await getReport()
        this.setState({reportData})
         
        // Find Total Number Years from Report Data
        
        const years = this.getYearsArr(reportData)
        this.setState({years})
    }


    // Render Months

    async changeBudgetTable(changeOptions){
        await changeBudget(changeOptions)
        window.location = "/main/budget"
    }
    
    render() { 
        const {budgetData, months, activeMonth, years, activeYear} = this.state
        
        // List Group Data
        const filteredData = this.renderMonth()
        const listGroupMonths = this.getMonthsArr(filteredData)
        
        
        //Budget Table 
        let month
        let year
        if(years.length !== 0 && months.length !== 0 && activeMonth >= 0){
            month = months[activeMonth].name
            year = years[activeYear].name
        } 
        return ( 
        <div className="ml-4">
            <div className="row">
                <div className="col">
                    <p className="h1"><span className="badge badge-pill badge-success mb-4">Budget</span></p> 
                    <ListGroup 
                        items={years}
                        onItemSelect={this.handleYearChange}
                        valueProperty="label"
                        keyProperty="_id"
                        activeClass={activeYear}
                        title="Select Year"
                    />
                    <ListGroup 
                        items={listGroupMonths}
                        onItemSelect={this.handleMonthChange}
                        valueProperty="label"
                        keyProperty="_id"
                        activeClass={activeMonth}
                        title="Select Month"
                    />
                    <BudgetTable 
                        data={budgetData}
                        activeMonth={month}
                        activeYear={year}
                    />
                </div>
                <div className="col-8">
                    <BudgetForm 
                    onSubmit={this.changeBudgetTable}
                    activeMonth={activeMonth}
                    activeYear={activeYear}
                    years={years}
                    months={months}
                    />
                </div>
            </div>
        </div> );
    }
}
 
export default Budget;

