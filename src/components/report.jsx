import { number } from 'joi';
import React, { Component } from 'react';
import {getReport} from '../services/reportService'
import ListGroup from "./common/listGroup"
import Pagination from "./common/pagination"

class Report extends ListGroup {
    state = {
        data: [],
        months: [
            { _id: 0, name: "Select", status: true},
            { _id: 1, name: "January", status: false},
            { _id: 2, name: "February", status: false},
            { _id: 3, name: "March", status: false},
            { _id: 4, name: "April", status: false},
            { _id: 5, name: "May", status: false},
            { _id: 6, name: "June", status: false},
            { _id: 7, name: "July", status: false},
            { _id: 8, name: "August", status: false},
            { _id: 9, name: "September", status: false},
            { _id: 10, name: "October", status: false},
            { _id: 11, name: "November", status: false},
            { _id: 12, name: "December", status: false},
        ],
        activeMonth: 1,
        pageItems: 3,
        currentPage: 0,
        dataLength: null,
        token: localStorage.jwt,
    }

    // Event Handlers

    handleChangeEvent = month => {
        this.setState( {activeMonth : month })
        this.setState({currentPage: 0})
        // console.log(this.state.activeMonth)
    }
    handlePageEvent = (page) => {
        // console.log('Current Page: ', page)
        this.setState({currentPage: page})
    }

    // Hooks
    async componentDidMount(){
        const { data } = await getReport()
        const dataLength = data.length
        this.setState({data})
        this.setState({dataLength})
        const months = this.groupItemStatus()
        // console.log("New Months: ", months)
        this.setState({months})
    }


    // Pagination 
    filterData(){
        const {activeMonth, data, months } = this.state
        let numberMonth = activeMonth
        if(activeMonth === 0){
            numberMonth += 1
        }
        const filtered = data.filter(item => item.month === months[numberMonth].name);
        return filtered
    }

    paginate(pageItems, currentPage, data ){
        // console.log("unPag data: ", data)
        // console.log("currentPage: ", currentPage)
        let startIndex = currentPage * pageItems;
        const paginatedData = data.slice(startIndex, startIndex + pageItems)
        // console.log("PagData: ", paginatedData)
        return paginatedData
    }

    render() { 
        const { activeMonth, pageItems, currentPage, months, data} = this.state
        // console.log("Selected Month:" , activeMonth)
        const filtered = this.filterData()
        // console.log(filtered)
        const dataLength = filtered.length;
        const paginated = this.paginate(pageItems, currentPage, filtered)
        
        return ( 
        <div className="m-2">
           <ListGroup 
            items={months} 
            onItemSelect={this.handleChangeEvent}
            activeClass={activeMonth}
            keyProperty="_id"
            valueProperty="name"
            
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
                            <td>{entry.month} {entry.day} {entry.year}</td>
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
                onPageChange={this.handlePageEvent}
                currentPage={currentPage}
            />
        </div> );
    }
}
 
export default Report;