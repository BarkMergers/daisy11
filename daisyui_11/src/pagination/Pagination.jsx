import './Pagination.css';


export default function Pagination({ data, updatePage }) {


    //{"currentPage":0,"totalPages":20,"totalItems":5,"hasMore":true}


    const buttons = Array(data.totalPages).fill(null).map((_, i) => i);




    return (
    
        <>


            {buttons.map((buttonId, i) =>
                <span className="paginationButton" onClick={() => updatePage(i) } >
                    {buttonId}
                </span>)
            }




        </>

    
    );



}