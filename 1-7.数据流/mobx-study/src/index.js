import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import es6 from './es6/decorator'
class Store {
    @observable count = 0
    @action.bound increment () {
        this.count++
    }
}

@observer
class App extends React.Component {
    render () {
        const { store} = this.props
        return (
            <div>
                <h1>App Component</h1>
                <p>{store.count}</p>
                <p>
                    <button onClick={store.increment}>increment</button>
                </p>
            </div>
        )
    }
}

ReactDOM.render(<App store={new Store()} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
