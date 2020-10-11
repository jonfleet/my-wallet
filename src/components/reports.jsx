import React, { Component } from 'react';
import {getReports} from '../services/getReport'
import ListGroup from "./common/listGroup"
import Pagination from "./common/pagination"

class Report extends Component {
    state = {
        data: [],
        months: [
            {label: "All Months", name: ""},
            {label: "April", name: "april"},
            {label: "May", name: "may"},
            {label: "June", name: "june"},
            {label: "July", name: "july"}
        ],
        selectedMonth: "",
        pageItems: 3,
        currentPage: 0,
        dataLength: null,
    }
    
    // {key: 1, 
    //     description: "Aldi", 
    //     category: "Groceries", 
    //     date: "4/4/2020", 
    //     amount: "$35", 
    //     account: "Amex"
    //     }
    onPageChange = (page) => {
        // console.log('Current Page: ', page)
        this.setState({currentPage: page})
    }

    async componentDidMount(){
        const {data} = await getReports()
        const dataLength = data.length
        this.setState({data})
        this.setState({dataLength})
    }

    handleMonthSelect = month => {
        // console.log("State Month: ",month.label)
        this.setState( {selectedMonth : month })
        this.setState({currentPage: 0})
    }
    handleDataEntry = () => {
        let entryKey = this.state.tableData.length
        entryKey++
        // console.log(entryKey)
        const data = {
            key: entryKey, 
            description: "Gutair Strings", 
            category: "Entertainment", 
            date: "4/7/2020", 
            amount: "$203", 
            account: "Amex" 
        };
        let tableData = this.state.tableData
        tableData.push(data)
        this.setState({ tableData })
    }

    paginate(pageItems, currentPage, data ){
        // console.log("unPag data: ", data)
        // console.log("currentPage: ", currentPage)
        let startIndex = currentPage * pageItems;
        const paginatedData = data.slice(startIndex, startIndex + pageItems)
        console.log("PagData: ", paginatedData)
        return paginatedData
    }

    render() { 
        const {data, months, selectedMonth, pageItems, currentPage} = this.state
        // console.log("Selected Month:" , selectedMonth)
        
        
        
        const filtered = selectedMonth.length !== 0 
            ? data.filter(item => item.date.toLowerCase() === selectedMonth) 
            : data;
        // console.log("filtered: ", filtered)
        const dataLength = filtered.length;
        const paginated = this.paginate(pageItems, currentPage, filtered)
        return ( 
        <div className="m-2">
           <ListGroup 
            items={months} 
            onItemSelect={this.handleMonthSelect}
            activeClass={selectedMonth}
            keyProperty="name"
            valueProperty="label"
            
            />
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
                    {paginated.map( entry => 
                        <tr key={entry._id}>
                            <td>{entry.description}</td>
                            <td>{entry.category}</td>
                            <td>{entry.date}</td>
                            <td>{entry.amount}</td>
                            <td>{entry.account}</td>
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
            <Pagination
                pageItems={pageItems}
                dataLength={dataLength}
                onPageChange={this.onPageChange}
                currentPage={currentPage}
            />
        </div> );
    }
}
 
export default Report;