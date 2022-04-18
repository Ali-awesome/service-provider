import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container mt-5'>
            <div className="blog">
                <h3 className='heading'>What is Semantic Tag?</h3>
                <p>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the tag is immediately recognized by the browser as some type of coding language.</p>
            </div>
            <div className="blog">
                <h3 className='heading'>Inline VS Inline-Block element</h3>
                <p>display: inline-block brought a new way to create side by side boxes that collapse and wrap properly depending on the available space in the containing element. It makes layouts that were previously accomplished with floats easier to create. No need to clear floats anymore.

                    Compared to display: inline, the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline, top and bottom margins and paddings are not respected, and with display: inline-block they are.

                    Now, the difference between display: inline-block and display: block is that, with display: block, a line break happens after the element, so a block element does not sit next to other elements.</p>
            </div>

        </div>
    );
};

export default Blog;