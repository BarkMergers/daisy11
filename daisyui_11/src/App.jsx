import './App.css'
import NavBar from './navbar/NavBar'

function App() {
    return (
        <>
            <NavBar title="MyTest"></NavBar>


            <div className="m-2" data-theme="dark">
                <button class="btn btn-primary">Dark Themed Button</button>
            </div>
            <div className="m-2" data-theme="light">
                <button class="btn btn-primary">Light Themed Button</button>
            </div>
        </>
    )
}
export default App