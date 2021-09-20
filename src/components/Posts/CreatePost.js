import React,{useState} from 'react';
//import shortid from 'shortid';
import { createPost } from '../../actions/postActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

const CreatePost = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [bodyText, setBodyText] = useState("");

    const submitForm = (e) =>{
        e.preventDefault();
        const newPost = {
            //id: shortid.generate(),
            title: title,
            body: bodyText,
        };
        dispatch(createPost(newPost));
        history.push("/");
    }

    return(
        <div className="container">
            <div className="py-4">
                <div className="card shadow">
                    <div className="card-header">Add a Post</div>
                    <div className="card-body">
                        <form onSubmit={submitForm}>
                            <div className="form-group">
                                <input 
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter a Post Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}                                    
                                />
                                <div className="form-group">
                                <textarea
                                row="5"
                                className="form-control from-control-lg"
                                placeholder="Enter Post Body Text"
                                value={bodyText}
                                onChange={(e) => setBodyText(e.target.value)}
                                >
                                </textarea>                                
                                </div>
                                <button className="btn btn-primary btn-lg">Add New Post</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            
        </div>
    );
}
export default CreatePost;