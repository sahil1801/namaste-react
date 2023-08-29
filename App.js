/** 
 *
 * <div id= "parent">
 *      <div id="child">
 *          <h1>I'm h1 tag </h1>
 *      </div>
 *      <div id="child">
 *          <h1>I'm h1 tag </h1>
 *      </div>
 * </div>
 *  
*/

const parent = React.createElement("div", {id:"parent"},
    [React.createElement("div", {id:"child"}, React.createElement("h1", {}, "I'm h1 tag")),
    React.createElement("div", {id:"child2"}, React.createElement("h1", {}, "I'm h1 tag")) ])

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);