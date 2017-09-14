// Link.react-test.js
import * as React from 'react';
// import * as TestUtils from 'react-dom/test-utils'
import AddNewBlog from './AddNewBlog';
import Blog from './Blog';
import { mount, render } from 'enzyme';

describe('<AddNewBlog />', () => {
  it('renders', () => {
    expect(render(
      <AddNewBlog addBlogHandler={() => {}} />
    )).toMatchSnapshot()
  });

  it('Calls addBlogHandler', () => {
    const mockAddBlogHandler = jest.fn();
    const component = mount(<AddNewBlog addBlogHandler={mockAddBlogHandler} />);

    // Fill in form
    const inputTitle = component.find('input[name="title"]') as any;
    inputTitle.node.value = 'title';
    inputTitle.simulate('change');

    const inputContent = component.find('textarea[name="content"]') as any;
    inputContent.node.value = 'content';
    inputContent.simulate('change');

    const inputTags = component.find('input[name="tags"]') as any;
    inputTags.node.value = 'tag1 tag2';
    inputTags.simulate('change');

    // Submit form
    component.find('form').simulate('submit');

    // Check call to addBlogHandler
    expect(mockAddBlogHandler).toBeCalled();
    const blog = mockAddBlogHandler.mock.calls[0][0] as Blog;
    expect(blog.title).toBe('title');
    expect(blog.content).toBe('content');
    expect(blog.tags).toEqual(['tag1', 'tag2']);
  });
});