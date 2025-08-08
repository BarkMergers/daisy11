import './TableRow.css';

const TableRow = ({ key, children }) => {
    return (
        <tr key={key + "_main"}>
            {children}
        </tr>
    );
}

export default TableRow;