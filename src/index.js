import React from 'react';
import ReactDOM, {unmountComponentAtNode} from 'react-dom';
import './index.css';
import Clock from './Components/Clock';
import registerServiceWorker from './registerServiceWorker';

let reactContainer = document.getElementById('reactContainer');
ReactDOM.render(<Clock onClose={() => unmountComponentAtNode(reactContainer)} />, reactContainer);

registerServiceWorker();
