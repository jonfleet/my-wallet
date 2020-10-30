
import React , {Component} from 'react';

// Reusable ListGroup Component

// Props
// items= {this.state.months}
// onItemSelect = this.handleMonthSelect
// textProperty = name
// activeClass = this.state.activeClass
class ListGroup extends Component {
    
    groupItemStatus = () => {
        const {data, months} = this.state
        // console.log("Budget Data: ", data)
        const newMonths = [...months]
        for(let i = 0; i < data.length; i++)  {
            for(let j = 1; j < months.length; j++){
                if(data[i].month == newMonths[j].name){
                    newMonths[j].status = true
                }
            }
        }
        return newMonths
    }

    render() { 
        const {items, valueProperty, keyProperty, onItemSelect } = this.props
        let {activeClass} = this.props
        // onItemSelect(items[0].key)
        // console.log("value Property:", valueProperty)
        // console.log("Active Class", activeClass)
        if (activeClass == 0 ){
            activeClass = 1
        }
        
        return (
            <ul className="list-group list-group-horizontal mt-2 mb-2">
            {items.map(item => (
                <li 
                    onClick={() => onItemSelect(item[keyProperty])} 
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
        );
    }
}
 
export default ListGroup;

// const ListGroup = (props) => {
//     // console.log("ListGroup Props: ", props)
//     const {items, valueProperty, keyProperty, onItemSelect } = props
//     let {activeClass} = props
//     // onItemSelect(items[0].key)
//     // console.log("value Property:", valueProperty)
//     // console.log("Active Class", activeClass)
//     if (activeClass == 0 ){
//         activeClass = 1
//     }

//     return ( 
//         <ul className="list-group list-group-horizontal mt-2 mb-2">
//             {items.map(item => (
//                 <li 
//                     onClick={() => onItemSelect(item[keyProperty])} 
//                     className={item[keyProperty] === activeClass
//                         ? "list-group-item active" 
//                         : "list-group-item"}
//                     key={item[keyProperty]} 
//                     style={item.status ? undefined : {display: "none"}}
//                 >
//                     {item[valueProperty]}
//                 </li>
//             ))}
//         </ul>
//      );
// }

// export default ListGroup;

