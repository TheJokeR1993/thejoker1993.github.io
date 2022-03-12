import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import  ReactMarkdown from "markdown-to-jsx"

ReactDOM.render(
  <ReactMarkdown>
  <Router>
    <App />
  </Router>
  </ReactMarkdown>,
  document.getElementById('root')
);

