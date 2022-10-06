import Post from "./Post"
import "./css/Posts.css"

function Posts() {
  return (
    <div className="posts">
        {/* Instagram Posts */}
        <Post profileImg='https://avatars.githubusercontent.com/u/69220994?v=4' username="JayBoyd"/>
        <Post profileImg='https://avatars.githubusercontent.com/u/69220994?v=4' username="JayBoyd"/>
        <Post profileImg='https://avatars.githubusercontent.com/u/69220994?v=4' username="JayBoyd"/>
        <Post profileImg='https://avatars.githubusercontent.com/u/69220994?v=4' username="JayBoyd"/>
        <Post profileImg='https://avatars.githubusercontent.com/u/69220994?v=4' username="JayBoyd"/>
        <Post profileImg='https://avatars.githubusercontent.com/u/69220994?v=4' username="JayBoyd"/>
    </div>
  )
}

export default Posts