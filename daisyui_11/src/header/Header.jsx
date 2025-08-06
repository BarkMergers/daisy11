import './Header.css';

export default function Header({ children }) {
    return (
        <fieldset className="fieldset header-container">
            {children}
        </fieldset>
    );
}