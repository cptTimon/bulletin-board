import React from 'react';
import { shallow } from 'enzyme';
import { NoUserNavComponent } from './NoUserNav';

describe('Component NoUserNav', () => {
  it('should render without crashing', () => {
    const component = shallow(<NoUserNavComponent />);
    expect(component).toBeTruthy();
  });
});
