
import React from 'react';

// Reusable ListGroup Component

// Props
// items= {this.state.months}
// onItemSelect = this.handleMonthSelect
// textProperty = name
// activeClass = this.state.activeClass

const ListGroup = (props) => {
    // console.log("ListGroup Props: ", props)
    const {items, valueProperty, keyProperty, onItemSelect, activeClass} = props
    // onItemSelect(items[0].key)
    // console.log("value Property:", valueProperty)
    // console.log("Active Class", activeClass)
    return ( 
        <ul className="list-group list-group-horizontal mt-2 mb-2">
            {items.map(item => (
                <li 
                    onClick={() => onItemSelect(item[keyProperty])} 
                    className={item[keyProperty] === activeClass
                        ? "list-group-item active" 
                        : "list-group-item"}
                    key={item[keyProperty]} 
                >
                    {item[valueProperty]}
                </li>
            ))}
        </ul>
     );
}

export default ListGroup;