
export default function Select({ title, value, data, onChange }) {

    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{title}</legend>
            <select value={value} className="input" onChange={onChange}>
                {data.map((item, i) => <option key={i} value={item}>{item}</option>)}
            </select>
        </fieldset>
    );

}