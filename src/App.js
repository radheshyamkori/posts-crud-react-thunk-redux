import React from 'react';
import CreatePost from './components/Posts/CreatePost';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NavigationBar from './components/elements/NavigationBar';
import Post from './components/Posts/Post';
import UpdatePost from './components/Posts/UpdatePost';
//import '../src/styles/App.scss';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        {/* <h1>This is React Thunk Post Crud App.</h1> */}
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/add" component={CreatePost} />
          <Route exact path="/post/:id" component={Post}/>
          <Route exact path="/updatePost/:id" component={UpdatePost}/>
        </Switch>
        </div>
      </Router>
    </Provider>
    
    
  );
}

export default App; 
