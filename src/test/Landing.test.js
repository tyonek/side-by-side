import React from 'react';
import ReactDOM from 'react-dom';
import Landing from '../Components/Landing';
import { MemoryRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Landing /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});