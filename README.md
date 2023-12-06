# Namaste React


# Parcel
- Dev Build
- local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimazation
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differntial Bundling - support older browser also
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking- remove unused code
- Workers
- Different dev amd prod bundles


# Namaste food
header
    - Logo
    - Nav Items
body
    - Search
    - RestaurantContainer
        - RestaurantCard
footer
    - Contacts
    - Links
    - Copyright
    - Address


// React.createElement => ReactElement-JS Object => HTMLElement(render)
// But it not good way to write a code

// const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

# JSX - Makes developers life easy
- It is also a convention that merge HTML and JS
- JSX is HTML-like syntex, It is not HTML in JS
- JSX is sanitizing the data , becuase of that attacker can't do malicious activity like css

JSX (transpiled before it reaches the JS) - Parcel - Babel - 
*/

# JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

# React Component
// Class based component - OLD
// Functional Component - NEW

// React functional component is normal JS function which return some peice of JS code
// React functional component which return react element
// start with capital letter
// All the component are render with this syntax - <Title />, <Title><Title />, {Title()}
// Component Compositions - component inside anther component

 const HeadingComponent = () => (
     <div id="container">
    <Title/>
     <h1 className="heading">Namaste React Functional Component</h1>;
   </div>
);

Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks - state variable - super powerful varible - normal js varible with some logic
(Normal JS utility functions)
- useState() - superpowerful state variable
- useEffect()

# Render
- Whenever the state variable updates react rerenders the component

# local varible 
const restaurant = [];

# state varible or hooks
const [restauranrt] = useState();

# Reconciliation algorithm - 2016 (React Fiber - react16)
- Reconciliation in React refers to the process of efficiently updating the user interface (UI) in response to changes in the underlying data or state. React uses a virtual DOM and a process called "reconciliation" to determine the minimal number of changes needed to update the actual DOM and keep it in sync with the current application state.
-  The main goal is to minimize the number of DOM manipulations.

# Diffing algorithm
-  that compares the current virtual DOM with the previous one and calculates the most efficient way to update the actual DOM.

# Virtual DOM Tree:
- React maintains a virtual DOM tree that represents the UI structure of your components. This virtual DOM is a lightweight copy of the actual DOM.

# Component Rendering:
- When a component's state or props change, React re-renders the component, generating a new virtual DOM representation.

# Component Lifecycle Hooks:
- During the reconciliation process, React invokes lifecycle hooks such as shouldComponentUpdate, componentWillUpdate, and componentDidUpdate to allow developers to control whether a component should update or to perform side effects after an update.

# Two approches for API call for rendering the UI
1.Loads => API Call (waiting) => render
2.Loads => render => API Call (waiting) => render

# useEffect():
- if no dependency array => useEffect is called on every render
- if dependency array is empty = [] => useEffect is called on intial render(just once)
- if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated

# useState():
- Don't use hooks inside a if or for loop or function.
-  Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app

# useRouteError();

# React-router-DOM:
-  It enables you to create Single Page Applications (SPAs) by allowing you to define routes, rendering components based on those routes, and updating the URL without triggering a full page reload. 
- create error page for you

# createBrowserRouter: 
- The BrowserRouter is typically created and used in your main application file to wrap your entire application.

- # The Link component:
- It is used for navigation and it's good to use <Link to=""> component instead of <a href="/"></a>

- The Route component is used to define routes and specify which components should be rendered for each route.

# RouterProvider:
- Providing routing configuration in our app

# 2 types of routing
- client side routing :- All the component is already load in our app, it doesn't make network call to server, it's not fetching a new page.

- server side routing :- we fetch the data form server


# Never update STATE varible directly like this:
- this.state.count = this.state.count + 1;
- instaed of that you use *setState* for updating the value

- *State varible* is big object in Class based component, so react  doesn't update all the varible, it only touch or check the desire value and update it using *setState()*

# Two way to import and write react.component in class based component:
1.import react from "react";
- class UserClass extends React.Component{}

2.import {Component} from "react";
- class UserClass extends Component{}

# REACT MOUNTING CYCLE WITH MULTIPLE INSTANCES 
- *REACT MOUNTING CYCLE DIADRAM* = https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


- Parent Constructor 
- Parent Render
    <CREATE SINGLE RENDER BATCH>
    - First Child Constructor 
    - First Child Render 

    - Second Child Constructor 
    - Second Child Render 

    <DOM UPDATED - IN SINGLE BATCH >
    - FirstChild Did mount
    - SecondChild Did mount

- Parent Did mount

# How MOUNTING-> showing UI, UPDATING-upgrade UI and UNMOUNTING-> removing from UI  works:

- *MOUNTING*
- Constructor(dummy)
- Render(dummy)
    - <HTML Dummy>
- ComponentDidMount
    - <API Call>
    - <this.setState> -> State variable is updated

- *UPDATING*
- Render
- <HTML (new API data)>
- ComponenetDidUpdate

- *UNMOUNTING*
- when change the page or state
-ComponentDidUnmount is called

# React application contain two main layer: data layer and UI layer
- UI layer is powered by data layer
- UI layer is static- JSX, it change based on data layer
- Data layer contain many thing like states, props, local varibles  

# Accordion
- 

# Lifting state up
- Using context in close children
- To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props.

# Props drilling - for avoiding this ,Passing Data Deeply with Context
- Passing props can become verbose and inconvenient if you have to pass them through many components in the middle
- Using context in distant children you can avoid props drilling

# Context 
- provides a way to pass data through the component tree without having to pass props down manually at every level 

# useContext()
- for creating context react gives - "createContext"
- <UserContext.Provider> - it's component  that accepts a value prop, This value prop will be the data that the context provides to its descendants.

# Redux Toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to app
 - Slice (cardSlice)
 - Dispatch(action)
 - Selector

# Why redux over Context?

# older(vanialla) redux
- "Configuring a Redux store is too complicated"
- "I have to add a lot of packages to get Redux to do anything useful"
- "Redux requires too much boilerplate code"
- Don't mutate state, returning was mandatory

# Redux Toolkit 
- We have to mutate(change, modify) the state

 # Zustand
 - A small, fast and scalable bearbones state-management solution using simplified flux principles

- Why zustand over redux?
    - Simple and un-opinionated
    - Makes hooks the primary means of consuming state
    - Doesn't wrap your app in context providers
    - Can inform components transiently (without causing render)

- Why zustand over context?
    - Less boilerplate
    - Renders components only on changes
    - Centralized, action-based state management

# Flux Principles
- there is a single-source of truth (the stores) and they can only be updated by triggering actions. The actions are responsible for calling the dispatcher, which the stores can subscribe for changes and update their own data accordingly. 

# 
1. More Effiecient way
- const cartItem = useSelector((store) => store.cart.items)

2. Less effiecient way
- const store = useSelector((store) => store)
- const cartItem = store.cart.items

# Immer used in BTS for mutate the state
- It is a tiny package that allows you to work with immutable state in a more convenient way

# Things to know
- //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      //RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []

      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },

# Types of Testing(developer)
- Unit Testing
- Integration Testing
- End to End Testing -e2e testing

# Setting up Testing in our app
- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom

# Things to note in Testing
- When we writing console.log - it returns JSX element(ReactFiber node, Virtual DOM, React Element, Object) 
- it and test is similer

- When testing, code that causes React state updates should be wrapped into act(...):
- act function from "react-dom/test-utils"