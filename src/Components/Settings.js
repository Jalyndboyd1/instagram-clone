import { useState } from "react"
import { useSelector } from 'react-redux'
import { Avatar, Button } from "@mui/material"
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase/app"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./css/Settings.css"

function Settings() {
    const user = useSelector((state) => state.user.user)
    const [file, setFile] = useState(null)
    const [caption, setCaption] = useState('')

    const handleChangeFile = e => {
        if (e.target.files[0]) setFile(e.target.files[0])
    }

    const handleUpload = () => {
        // Uploads Post information
        const uploadTask = ref(storage, `images/${file.name}`)
        uploadBytes(uploadTask, file).then((snapshot) => {
            console.log('Uploaded a blob or file!', snapshot);
        });

        getDownloadURL(ref(storage, `images/${file.name}`))
            .then((url) => {
                const docRef = addDoc(collection(db, "posts"), {
                    caption: caption,
                    imgURL: url,
                    likes: 0
                });
                console.log("Document written with ID: ", docRef.id);
            })
    }

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
                <Button onClick={handleUpload}>
                    upload
                </Button>
            </div>
        </div>
    )
}

export default Settings