import './App.css';
import Nav from './Components/Nav';
import Stories from "./Components/Stories"
import Posts from "./Components/Posts"

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="app__container">
        <div className="app__body">
        <Stories />
        <Posts />
        </div>
      <div className="app__settings">
        settings
      </div>
      </div>
    </div>
  );
}

export default App;
