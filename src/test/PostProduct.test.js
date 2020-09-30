import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import PostProduct from '../Components/PostProduct';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><PostProduct /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});