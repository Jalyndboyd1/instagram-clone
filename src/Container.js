import Nav from './Components/Nav';
import Stories from "./Components/Stories"
import Posts from "./Components/Posts"
import Settings from "./Components/Settings"
import './App.css';

function Container() {
    return (
        <div className='container'>
            <Nav />
            <div className="app__container">
                <div className="app__body">
                    <Stories />
                    <Posts />
                </div>
                <div className="app__settings">
                    <Settings />
                </div>
            </div>
        </div>
    )
}

export default Container