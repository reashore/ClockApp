
import React from 'react';
import ReactDOM, {unmountComponentAtNode} from 'react-dom';
import './index.css';
import Clock from './Components/Clock';
import registerServiceWorker from './registerServiceWorker';

const reactContainer = document.getElementById('reactContainer');
const onClose = () => unmountComponentAtNode(reactContainer);

ReactDOM.render(<Clock onClose={onClose} />, reactContainer);

registerServiceWorker();
