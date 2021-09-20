import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getPost, updatePost} from '../../actions/postActions';
import {useParams, useHistory} from 'react-router-dom';

const UpdatePost = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const post = useSelector((state) => state.post.post);
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(()=>{
      loadPost();  
    }, []);

    useEffect(()=>{
        if(post){
            setTitle(post.title);
            setBody(post.body);
        }
    }, [post]);

    const loadPost = () => {
        dispatch(getPost(id));
    }

    const submitForm = (e) => {
        e.preventDefault();
        const updatedPost = {
            id: post.id,
            title: title,
            body: body,
        };
        dispatch(updatePost(updatedPost));
        history.push("/");
    }
    return(
        <div className="container">
            <div className="py-4">
                <div clasName="card shadow">
                    <div className="card-header">Update a Post</div>
                    <div className="card-body">
                    <form onSubmit={submitForm}>
                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Enter a Title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}                                 
                            />                            
                        </div>
                        <div className="form-group">
                            <textarea 
                            rows="5" 
                            className="form-control from-control-lg" 
                            placeholder="Enter the body text" 
                            value={body} 
                            onChange={(e) => setBody(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <button className="btn btn-primary btn-lg">Update Post</button>
                    </form>

                    </div>

                </div>

            </div>
            
        </div>
    );
}
export default UpdatePost;