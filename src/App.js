/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostsPage from './components/PostsContainer/PostsPage.js'
import SearchBar from './components/SearchBar/SearchBarContainer.js'
const App = () => {
  const [ search, setSearch ] = useState('')
  const handleChange = e => {
    setSearch(e.target.value)
  }
  return (
    <div className="App">
      <SearchBar search = {search} handleChange = {handleChange} />
      <PostsPage search = {search} />
      {/* Add imported components here to render them */}
    </div>
  );
};

export default App;
