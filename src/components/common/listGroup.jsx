import React , {Component} from 'react';

// Reusable ListGroup Component

// Props
// items= {this.state.months}
// onItemSelect = this.handleMonthSelect
// textProperty = name
// activeClass = this.state.activeClass
class ListGroup extends Component {
    
    renderMonth() {
        const {activeYear, years, reportData} = this.state

        // Filter Out Months based on Active Year
        if(reportData.length !== 0 && years.length !== 0){
            const filterByYear = reportData.filter(item => item.year === years[activeYear].name)
            return filterByYear
        } 
        return []
        
    }

    // Event Handlers
    handleMonthChange = (monthId, months) => {
        this.setState({months})
        this.setState({activeMonth: monthId})
        this.setState({currentPage: 0})
        
    }

    handleYearChange = (year) => {
        this.setState({activeYear: year})
        this.setState({activeMonth: -1})
        this.setState({currentPage: 0})
    }

    // Get The initial ListGroup Data Arrays 
    getYearsArr(data) {
        // Remove Duplicate Months
        let yearsSet = new Set()
        for (let i = 0; i < data.length; i++){
            yearsSet.add(data[i].year)
        }

        let iter = yearsSet.values()
        let years = [] 
        let value = iter.next().value
        
        while (value){
            years.push({name: value, label: value, status: true})
            value =  iter.next().value
        }

        // Sort in ascending order
        const sortedYears = years.sort((a,b) => a.name - b.name)
        for(let i = 0; i < sortedYears.length; i++) {
            sortedYears[i]._id = i
        }
        return sortedYears
    }

    getMonthsArr(data) {
        let monthsSet = new Set()
        
        for(let i = 0; i < data.length; i++){
            monthsSet.add(data[i].month)
        }
        
        let iter = monthsSet.values()
        let months = []
        let value = iter.next().value
        
        let i = 0
        while (value){
            months.push({
                _id: i, 
                name: value, 
                label: value.slice(0,1).toUpperCase() + value.slice(1),
                status: true
            })
            value = iter.next().value
            i++
        }
        
        // Sort Returned Months
        const base = [ 
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december"
        ]

        const sortedMonths = months.sort((a,b) => base.indexOf(a.name) - base.indexOf(b.name))
        return sortedMonths

    }

    // Filter Functions

    filterByYear = (data) =>{
        const {years, activeYear} = this.state
        const filteredByYear = data.filter(
            item => item.year === years[activeYear].name
        )
        return filteredByYear
    }

    render() { 
        const {items, valueProperty, keyProperty, onItemSelect, title} = this.props
        let {activeClass} = this.props
    
        return (
            <div>
                <p className="h2"><span className="badge badge-secondary">{title}</span></p> 
                <ul className="list-group list-group-horizontal mt-2 mb-2">
                {items.map(item => (
                    <li 
                        onClick={() => onItemSelect(item[keyProperty], items)} 
                        className={item[keyProperty] === activeClass
                            ? "list-group-item active" 
                            : "list-group-item"}
                        key={item[keyProperty]} 
                        style={item.status ? undefined : {display: "none"}}
                    >
                        {item[valueProperty]}
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
}
 
export default ListGroup;

