import React from "react";

// Components
import BudgetTable from "./budgetTable";
import BudgetForm from "./budgetForm";
import ListGroup from "./common/listGroup";

// Services
import { getBudget, changeBudget } from "../services/budgetService";
import { getReport } from "../services/reportService";

// CSS
import "../css/budget.css";

class Budget extends ListGroup {
  state = {
    reportData: [],
    filteredData: [],
    budgetData: [],
    filteredBudgetData: [],
    months: [],
    activeMonth: -1,
    years: [],
    activeYear: 0,
  };

  // Hooks
  async componentDidMount() {
    // Query Budget Data
    const { data } = await getBudget();
    this.setState({ budgetData: data.budget });

    // Query Report Data
    const { data: reportData } = await getReport();
    this.setState({ reportData });

    // Find Total Number Years from Report Data

    const years = this.getYearsArr(reportData);
    this.setState({ years });
  }

  // Render Months

  async changeBudgetTable(changeOptions) {
    await changeBudget(changeOptions);
    window.location = "/main/budget";
  }

  render() {
    const { budgetData, months, activeMonth, years, activeYear } = this.state;

    // List Group Data
    const filteredData = this.renderMonth();
    const listGroupMonths = this.getMonthsArr(filteredData);

    //Budget Table
    let month;
    let year;
    if (years.length !== 0 && months.length !== 0 && activeMonth >= 0) {
      month = months[activeMonth].name;
      year = years[activeYear].name;
    }
    return (
      <div className="row ml-0">
        <div className="m-3 bg-light p-3 rounded col col-sm-10 col-md-9 col-lg-6 col-xl-5">
          <div className="row">
            <p className="col h1">
              <span className="badge badge-primary mb-4">Budget</span>
            </p>
          </div>
          <div className="row">
            <div className="col-4">
              <ListGroup
                items={years}
                onItemSelect={this.handleYearChange}
                valueProperty="label"
                keyProperty="_id"
                activeClass={activeYear}
                title="Year"
              />
              <ListGroup
                items={listGroupMonths}
                onItemSelect={this.handleMonthChange}
                valueProperty="label"
                keyProperty="_id"
                activeClass={activeMonth}
                title="Month"
              />
            </div>
            <div className="col">
              <BudgetTable
                data={budgetData}
                activeMonth={month}
                activeYear={year}
              />
            </div>
          </div>
        </div>
        <div className="m-3 p-3 bg-light rounded change-budget-height">
          <BudgetForm
            onSubmit={this.changeBudgetTable}
            activeMonth={activeMonth}
            activeYear={activeYear}
            years={years}
            months={months}
          />
        </div>
      </div>
    );
  }
}

export default Budget;
