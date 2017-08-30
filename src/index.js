import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Posts from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Posts />, document.getElementById('root'));
registerServiceWorker();
