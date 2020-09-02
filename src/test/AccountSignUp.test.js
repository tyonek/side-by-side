import React from 'react';
import ReactDOM from 'react-dom';
import AccountSignUp from '../Components/AccountSignUp';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountSignUp />, div);
  ReactDOM.unmountComponentAtNode(div);
});