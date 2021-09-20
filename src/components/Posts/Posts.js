import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PostCard from './PostCard';
import {getPosts} from '../../actions/postActions';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.posts);
    useEffect(() => {
        dispatch(getPosts());
    },[])
    return (
        <div className="row">
            {posts.map((postItem) => (
                <PostCard postItem={postItem}/>
            ))}
        </div>
    );
}
export default Posts;