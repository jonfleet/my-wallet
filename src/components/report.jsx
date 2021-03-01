import React from "react";
import { getReport } from "../services/reportService";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";

// CSS
import "../css/report.css";

class Report extends ListGroup {
  state = {
    reportData: [],
    months: [],
    activeMonth: -1,
    years: [],
    activeYear: 0,
    pageItems: 6,
    currentPage: 0,
    dataLength: null,
  };

  // Event Handlers

  handlePageEvent = (page) => {
    this.setState({ currentPage: page });
  };

  // Hooks
  async componentDidMount() {
    // Query Report Data
    const { data: reportData } = await getReport();
    this.setState({ reportData });

    //Find Data Length
    const dataLength = reportData.length;
    this.setState({ dataLength });

    // Find number of Years
    const years = this.getYearsArr(reportData);
    this.setState({ years });
  }

  filterDataByMonth(data) {
    const { activeMonth, months } = this.state;

    if (data.length !== 0 && months.length !== 0 && activeMonth >= 0) {
      const monthFiltered = data.filter(
        (item) => item.month === months[activeMonth].name
      );
      return monthFiltered;
    }

    return [];
  }

  paginate(pageItems, currentPage, data) {
    let startIndex = currentPage * pageItems;
    const paginatedData = data.slice(startIndex, startIndex + pageItems);
    return paginatedData;
  }

  render() {
    const {
      activeMonth,
      years,
      activeYear,
      pageItems,
      currentPage,
    } = this.state;

    // List Group
    const filteredDataByYear = this.renderMonth();
    const listGroupMonths = this.getMonthsArr(filteredDataByYear);

    // Pagination
    const filteredDataByMonth = this.filterDataByMonth(filteredDataByYear);
    const paginated = this.paginate(
      pageItems,
      currentPage,
      filteredDataByMonth
    );
    const dataLength = filteredDataByMonth.length;

    return (
      <div className="bg-light m-3 p-3 rounded report-width">
        <p className="h1">
          <span className="badge badge-primary mb-4">Report</span>
        </p>
        <div className="row">
          <div className="col col-md-4 col-lg-3 col-xl-2">
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
          </div>
          <div className="col col-md">
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Account</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((entry) => (
                    <tr key={entry._id}>
                      <td>{entry.description}</td>
                      <td>
                        {entry.category.charAt(0).toUpperCase() +
                          entry.category.slice(1)}
                      </td>
                      <td>
                        {entry.month.charAt(0).toUpperCase() +
                          entry.month.slice(1) +
                          ","}{" "}
                        {entry.day} {entry.year}
                      </td>
                      <td>{"$" + entry.amount}</td>
                      <td>
                        {entry.account.charAt(0).toUpperCase() +
                          entry.account.slice(1)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination
              pageItems={pageItems}
              dataLength={dataLength}
              onPageChange={this.handlePageEvent}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
