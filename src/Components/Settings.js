import { useSelector } from 'react-redux'
import { Avatar } from "@mui/material"
import "./css/Settings.css"

function Settings() {
    const user = useSelector((state) => state.user.user)

    return (
        <div className='settings'>
            <div className='settings__info'>
                <Avatar src={user.photoURL} alt={user.displayName} sx={{ height: 60, width: 60 }} />
                <div className='settings__name'>
                    {user.displayName}
                    <p>{user.email}</p>
                </div>
            </div>
            <div className='settings__upload'>
                {/* Upload Images */}
            </div>
        </div>
    )
}

export default Settings