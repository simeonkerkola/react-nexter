import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/index.css';
import LandingPage from './components/LandingPage';
import registerServiceWorker from './registerServiceWorker';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
    </div>
  </BrowserRouter>
);

const jsx = <AppRouter />;

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
