import React from 'react'
import ReactDOM from 'react-dom/client'
// const heading = React.createElement("h1", {id: "heading"}, "Hello from the React")
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// create this structure using React.createElement();
{/* <div id="parent">
    <div id="child1">
        <h1>heading1</h1>
        <h1>heading2</h1>
    </div>
    <div id="child2">
        <h1>heading1</h1>
        <h1>heading2</h1>
    </div>
</div> */}

const parent = React.createElement("div", {id: "parent"}, 
    [
        React.createElement("div", {id: "child1"},
            [
                React.createElement("h1", {}, "heading1"), React.createElement("h1", {}, "heading2")
            ]), 
            React.createElement("div", {id: "child2"},
            [
                React.createElement("h1", {}, "heading1"), React.createElement("h1", {}, "heading2"),
            ]
        ) 
    ]
);
//this code looks very ugly so we will use 'JSX' to make our life easy.
//still this is the core of React, JSX just help us to do these things easily

const myJsx = <h1>Hello from JSX and Babel</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(myJsx);    //plain js object

root.render(myJsx);