import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
    // console.log(post)
    return (
        <div className='mb-5'>
            <NavLink to={`/blog/${post.id}`}>
                <span className='font-bold hover:underline' >{post.title}</span>
            </NavLink>
            <p>
                By <span className='italic'>{post.author}</span>
                on {" "}
                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span className='font-bold underline'>{post.category}</span>
                </NavLink>
            </p>
            <p>posted on {post.date}</p>
            
            <p className='mt-3'>{post.content}</p>
            
            <div className='flex gap-2 gap-y-0 flex-wrap ' >
                {
                    post.tags.map((tag, index) => (
                        <NavLink key={index}
                            to={`/tags/${tag.replaceAll(" ", "-")}`}
                            
                           
                        >
                            <span className='text-[blue] underline text-[12px]'>{`#${tag}`}</span>
                        </NavLink>
                    ))}
            </div>
        </div>
    );

};

export default BlogDetails;
BlogDetails.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        content: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }).isRequired,
};
