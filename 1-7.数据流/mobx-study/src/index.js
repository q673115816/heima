import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from './store'


// @observer
// class App extends React.Component {
//     render () {
//         const { store} = this.props
//         return (
//             <div>
//                 <h1>App Component</h1>
//                 <p>{store.count}</p>
//                 <p>
//                     <button onClick={store.increment}>increment</button>
//                 </p>
//             </div>
//         )
//     }
// }

ReactDOM.render(<App store={new Store()} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
