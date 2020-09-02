import React from 'react';
import ReactDOM from 'react-dom';
import AccountSignIn from '../Components/AccountSignIn';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountSignIn />, div);
  ReactDOM.unmountComponentAtNode(div);
});