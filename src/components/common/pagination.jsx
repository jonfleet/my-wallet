import React from "react"

// Props
// data = [1,2,3]

const Pagination = (props) => {
    const {pageItems, dataLength, onPageChange, currentPage} = props
    // const pageNumbers = [1,2,3]
    const numPages = Math.ceil(dataLength/pageItems)
    // console.log("numPages: ", numPages)
    // console.log("Data length:", dataLength)
    const pageNumbers = [...Array(numPages).keys()]

    return ( 
        <ul className="pagination">
            <li key="previous" className="page-item"><button onClick={()=> onPageChange(currentPage === 0 ? currentPage : currentPage - 1)} className="page-link">Previous</button></li>
            {pageNumbers.map(page => 
                <li key={page} className={currentPage === page ? "page-item active" : "page-item"}>
                    <button  
                    onClick={() => onPageChange(page)} 
                    className="page-link">{page + 1}
                    </button>
                </li>
            )}
            <li key="next" className="page-item"><button onClick={() => onPageChange(currentPage >= pageNumbers.length -1 ? currentPage : currentPage + 1 )} className="page-link">Next</button></li>
        </ul>
     );
}
 
export default Pagination;