import React from "react"


const Pagination = (props) => {
    const {
        pageItems, 
        dataLength, 
        onPageChange,
        currentPage
    } = props
    const numPages = Math.ceil(dataLength/pageItems)
    const pageNumbers = [...Array(numPages).keys()]

    return ( 
        <ul className="pagination">
            
            <li key="previous" className="page-item">
                <button 
                    onClick={()=> onPageChange(currentPage === 0 ? currentPage : currentPage - 1)} 
                    className="page-link"
                    >Previous
                </button>
            </li>
            
            {pageNumbers.map(page => 
                <li key={page} className={currentPage === page ? "page-item active" : "page-item"}>
                    <button  
                        onClick={() => onPageChange(page)} 
                        className="page-link">{page + 1}
                    </button>
                </li>
            )}
            
            <li key="next" className="page-item">
                <button 
                    onClick={() => onPageChange(currentPage >= pageNumbers.length -1 ? currentPage : currentPage + 1 )} 
                    className="page-link"
                    >Next
                </button>
            </li>

        </ul>
     );
}
 
export default Pagination;