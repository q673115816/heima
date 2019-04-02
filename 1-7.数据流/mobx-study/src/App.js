import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
      const { store} = this.props
      return (
        <div>
            <h1>App Component</h1>
            <p>{store.count}</p>
            <p>
                <button onClick={store.increment()}>increment</button>
            </p>
        </div>
      )
  }
}

export default App;
