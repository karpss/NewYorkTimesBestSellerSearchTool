import React from 'react';
import BookResults from './BookResults';
import {shallow} from 'enzyme';


it('renders without crashing', () => {
  shallow(<BookResults/>);
});