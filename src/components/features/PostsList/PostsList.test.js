import React from 'react';
import { shallow } from 'enzyme';
import { PostsListComponent } from './PostsList';


const mockProps = {
  posts: [],
};

describe('Component PostsList', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostsListComponent posts={mockProps.posts} />);
    expect(component).toBeTruthy();
  });
});
