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
            <li className="page-item"><a href="#" onClick={()=> onPageChange(currentPage === 0 ? currentPage : currentPage - 1)} className="page-link">Previous</a></li>
            {pageNumbers.map(page => 
                <li className={currentPage === page ? "page-item active" : "page-item"}>
                    <a 
                    href="#" 
                    onClick={() => onPageChange(page)} 
                    className="page-link">{page + 1}
                    </a>
                </li>
            )}
            <li className="page-item"><a href="#" onClick={() => onPageChange(currentPage >= pageNumbers.length -1 ? currentPage : currentPage + 1 )} className="page-link">Next</a></li>
        </ul>
     );
}
 
export default Pagination;