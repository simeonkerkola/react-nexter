import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import LandingPage from './components/LandingPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LandingPage />, document.getElementById('root'));
registerServiceWorker();
