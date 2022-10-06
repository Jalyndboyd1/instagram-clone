function Post({username, profileImg, likeCount, caption, location}) {
  return (
    <div className="post">
        <div className="post__top">
            <div class="post__topLeft">
                <img src = {profileImg} alt =''/>
                <p>{username}</p>
            </div>
            <div class="post__topRight">
                {/* more horizon icon */}
            </div>
        </div>
        <div className="post__image">
            {/* post image */}
            <img src="https://avatars.githubusercontent.com/u/69220994?v=4"/>
        </div>
        <div className='post__bottom'></div> 
    </div>
  )
}

export default Post