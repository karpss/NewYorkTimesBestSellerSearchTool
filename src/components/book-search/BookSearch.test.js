import React from 'react'
import BookSearch from './BookSearch'
import {shallow} from 'enzyme'


it('renders without crashing', () => {
  shallow(<BookSearch/>);
});