// Link.react-test.js
import * as React from 'react';
import * as TestUtils from 'react-dom/test-utils'
import AddNewBlog from './AddNewBlog';
import Blog from './Blog';

describe('<AddNewBlog />', () => {
  it('renders', () => {
    expect(TestUtils.createRenderer().render(
      <AddNewBlog addBlogHandler={() => {}} />
    )).toMatchSnapshot()
  });

  it('Calls addBlogHandler', () => {
    const mockAddBlogHandler = jest.fn();
    const component = TestUtils.renderIntoDocument(<AddNewBlog addBlogHandler={mockAddBlogHandler} />) as AddNewBlog;

    // Fill in form
    (component.refs.title as HTMLInputElement).value = 'title';
    TestUtils.Simulate.change(component.refs.title);
    (component.refs.content as HTMLTextAreaElement).value = 'content';
    TestUtils.Simulate.change(component.refs.content);
    (component.refs.tags as HTMLInputElement).value = 'tag1 tag2';
    TestUtils.Simulate.change(component.refs.tags);

    // Submit form
    TestUtils.Simulate.submit(component.refs.form);

    // Check call to addBlogHandler
    expect(mockAddBlogHandler).toBeCalled();
    const blog = mockAddBlogHandler.mock.calls[0][0] as Blog;
    expect(blog.title).toBe('title');
    expect(blog.content).toBe('content');
    expect(blog.tags).toEqual(['tag1', 'tag2']);
  });
});