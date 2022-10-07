import { Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import logo from "../logo.png"
import "./css/Nav.css"
import { useSelector, useDispatch } from 'react-redux'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { logout } from '../redux/reducers/counterSlice'

function Nav() {
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()

    return (
        <div className='nav'>
            <img src={logo} />
            <div className="nav__search">
                <Search className="nav__searchIcon" />
                <input placeholder='Search' />
            </div>
            <div className="nav__right">
                <LogoutOutlinedIcon sx={{
                    color: '#fff',
                    marginRight: 5,
                    cursor: 'pointer'
                }} onClick={()=> dispatch(logout())} />
                <Avatar src={user.photoURL} alt={user.displayName} />
            </div>
        </div>
    )
}

export default Nav