
import Blog from './Blog';

const blog1 = new Blog();
blog1.id = 1;
blog1.title = 'New episodes of Rick and Morty';
blog1.tags = ['tv', 'media'];
blog1.posted = new Date(2017, 9, 5);
blog1.content = 'Come and see, every monday!';

const blog2 = new Blog();
blog2.id = 2;
blog2.title = 'Hello World';
blog2.tags = ['foo', 'bar'];
blog2.posted = new Date(2017, 9, 4);
blog2.content = 'A hearty hello to the world!';

const blog3 = new Blog();
blog3.id = 3;
blog3.title = 'Third blogpost';
blog3.tags = ['charm', 'shipsright'];
blog3.posted = new Date(2017, 9, 3);
blog3.content = 'Here\'s to a fourth one!';

const blogs = [
    blog1, blog2, blog3
];

export default blogs;