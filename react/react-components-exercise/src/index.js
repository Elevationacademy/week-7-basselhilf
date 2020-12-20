import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Sum, App } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(<Sum/>,document.getElementById('root'))
