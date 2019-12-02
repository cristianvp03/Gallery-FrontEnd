import React from 'react'

const Pagination = props =>{
    return (
        <div className="py-3">
            <button onClick={props.pageBefore} type="button" className="btn btn-info mr-1">Before &lt;</button>
            <button onClick={props.pageNext} type="button" className="btn btn-info mr-1">Next &gt;</button>
        </div>
    );
}


export default Pagination;