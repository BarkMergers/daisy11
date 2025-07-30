

export default function Input({ title, placeholder, type }) {

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
                <input type={type} className="input" placeholder={placeholder} style={ inlineStyle } />
            </fieldset>

        </>
    
    
    );



}