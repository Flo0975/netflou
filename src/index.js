import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/Display';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={Display}/>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();