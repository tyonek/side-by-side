import React from 'react';
import ReactDOM from 'react-dom';
import SingleProduct from '../Components/SingleProduct';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleProduct />, div);
  ReactDOM.unmountComponentAtNode(div);
});