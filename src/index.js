import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component.
// This component should produce HTML

const App = () => {
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));