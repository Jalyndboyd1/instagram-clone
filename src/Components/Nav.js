import { Search, HomeOutlined, ChatBubbleOutline, FavoriteBorderOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import logo from "../logo.png"
import "./css/Nav.css"

function Nav() {
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
                <Avatar />
            </div>
        </div>
    )
}

export default Nav