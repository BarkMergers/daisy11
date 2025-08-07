import './Pagination.css';

export default function Pagination({ data, updatePage }) {

    const buttons = data == null ? [] : Array(data.totalPages).fill(null).map((_, i) => i);

    return (
        <>
            {data != null && buttons.map((buttonId, i) => {



                const active = i == data.pageId ? { backgroundColor: "#ade8f3" } : {};

                return (<span style={active} className="paginationButton px-5 py-1.5 text-black" onClick={() => updatePage(i)} >
                        {buttonId + 1}
                    </span>);
                })
            }
        </>
    );
}