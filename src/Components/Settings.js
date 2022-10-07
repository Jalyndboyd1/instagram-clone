import { useState } from "react"
import { useSelector } from 'react-redux'
import { Avatar, Button } from "@mui/material"
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase/app"
import "./css/Settings.css"

function Settings() {
    const user = useSelector((state) => state.user.user)
    const [file, setFile] = useState(null)
    const [caption, setCaption] = useState('')
    const [progress, setProgress] = useState(0)

    const handleChangeFile = e => {
        if (e.target.files[0]) setFile(e.target.files[0])
    }

    const handleUpload = () => {
        // Uploads Post information
        // const uploadTask = storage.ref(`images/${file.name}`).put(file)
    }

    console.log(file)
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
                <input placeholder='enter caption' value={caption} onChange={(e) => setCaption(e.target.value)} />
                <input type='file' accept="image/png, image/jpeg" onChange={handleChangeFile} />
                <Button>
                    upload
                </Button>
            </div>
        </div>
    )
}

export default Settings