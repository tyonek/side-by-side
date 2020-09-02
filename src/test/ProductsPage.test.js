import React from 'react';
import ReactDOM from 'react-dom';
import ProductsPage from '../Components/ProductsPage'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductsPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});