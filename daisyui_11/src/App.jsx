import './App.css'
import NavBar from './navbar/NavBar'
import Rating from './rating/Rating'
import { useState } from 'react'

function App() {

    const [value, setValue] = useState(4);

    return (
        <>
            <NavBar title="MyTest"></NavBar>

            <div className="m-2" data-theme="dark">
                <button class="btn btn-primary">Dark Themed Button</button>
            </div>
            <div className="m-2" data-theme="light">
                <button class="btn btn-primary">Light Themed Button</button>
            </div>

            <Rating stars={7} value={value} onChange={(v) => setValue(v) } ></Rating>

            <div>{value}</div>

        </>
    )
}
export default App