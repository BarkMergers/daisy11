import './Label.css';

export default function Label({ children, title }) {
    return (
        <>
            <fieldset className="fieldset label-container">
                <legend className="fieldset-legend">{title}</legend>
                <span className="input label-style" >{children}</span>
            </fieldset>

        </>
    );
}