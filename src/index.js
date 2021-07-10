import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
class Chess extends React.Component {
    render() {
        return <App />
    }
}

ReactDOM.render(<Chess />, document.getElementById('root'))


