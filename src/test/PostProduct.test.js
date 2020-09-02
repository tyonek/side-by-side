import React from 'react';
import ReactDOM from 'react-dom';
import PostProduct from '../Components/PostProduct';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostProduct />, div);
  ReactDOM.unmountComponentAtNode(div);
});