import { Search, HomeOutlined, ChatBubbleOutline, FavoriteBorderOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import logo from "../logo.png"
import "./css/Nav.css"
import { useSelector } from 'react-redux'

function Nav() {
  const user = useSelector((state) => state.user.user)

    return (
        <div className='nav'>
            <img src={logo} />
            <div className="nav__search">
                <Search className="nav__searchIcon" />
                <input placeholder='Search' />
            </div>
            <div className="nav__right">
                <HomeOutlined className="nav__rightIcon" />
                <ChatBubbleOutline className="nav__rightIcon" />
                <FavoriteBorderOutlined className="nav__rightIcon" />
                <Avatar src={user.photoURL} alt={user.displayName}/>
            </div>
        </div>
    )
}

export default Nav