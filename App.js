import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Component/Header.js';
//we can have components inside component
//we can have componets inside variable/reactElement

//react element
const heading = (
    <h1>Hello</h1>
);

//functional componet 1
const SmallComponent = ()=>(
    // React.createElement("h3",{}, "i am a small functional component")
    <h3>Hey i am a small functional component</h3>
)

//functional component 2 
const LargeComponent = () =>(
    <div id="container">
    {heading}
    <h1>Hello from the Large functional component</h1>
    <SmallComponent />
    <Header />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<LargeComponent />);