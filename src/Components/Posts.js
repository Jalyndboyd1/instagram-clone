import { useState, useEffect } from "react"
import Post from "./Post"
import "./css/Posts.css"
import { collection, onSnapshot, query } from "firebase/firestore"
import { db } from "../firebase/app"

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const postsQuery = query(collection(db, 'posts'))
        const getPosts = onSnapshot(postsQuery, (querySnapshot) => {
            querySnapshot.docs.forEach((doc) => {
                setPosts((oldPosts) => [doc.data(), ...oldPosts])
            })
        })
        // db.collection('posts').onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => doc.data())))
        return () => getPosts
    }, [])

    console.log(posts)
    return (
        <div className="posts">
            {/* Instagram Posts */}
            {posts.map((post) => {
                return <Post
                    profileImg={post.avatar}
                    username={post.name}
                    caption={post.caption}
                    likes={post.likes} 
                    image={post.imgURL}
                    />
            })}
            {/* <Post profileImg='https://avatars.githubusercontent.com/u/69220994?v=4' username="JayBoyd" caption="Hello Worldsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss" />
            <Post profileImg='https://avatars.githubusercontent.com/u/69220994?v=4' username="JayBoyd" caption="Hello Worlds" />
            <Post profileImg='https://avatars.githubusercontent.com/u/69220994?v=4' username="JayBoyd" caption="Hello Worlds" />
            <Post profileImg='https://avatars.githubusercontent.com/u/69220994?v=4' username="JayBoyd" caption="Hello Worlds" />
            <Post profileImg='https://avatars.githubusercontent.com/u/69220994?v=4' username="JayBoyd" caption="Hello Worlds" />
            <Post profileImg='https://avatars.githubusercontent.com/u/69220994?v=4' username="JayBoyd" caption="Hello Worlds" /> */}
        </div>
    )
}

export default Posts