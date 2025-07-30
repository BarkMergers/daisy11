

export default function Input({ value, title, placeholder, type, onChange }) {

    var inlineStyle = {};

    if (type == "checkbox") {
        inlineStyle = {
            height: "20px",
            width: "20px",
            margin: "10px 20px"
        }

    }




    return (
    
        <>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">{title}</legend>
                <input type={type} value={value} checked={value} className="input" placeholder={placeholder} onChange={onChange} style={ inlineStyle } />
            </fieldset>

        </>
    
    
    );



}