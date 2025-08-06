import './Select.css';

export default function Select({ title, value, data, onChange }) {

    return (
        <fieldset className="fieldset select-container">
            <legend className="fieldset-legend">{title}</legend>
            <select value={value} className="input select-style" onChange={onChange}>
                {data.map((item, i) => <option key={i} value={item}>{item}</option>)}
            </select>
        </fieldset>
    );

}