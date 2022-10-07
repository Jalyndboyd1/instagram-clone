import { ChatBubbleOutline, FavoriteBorderOutlined } from "@mui/icons-material";

function Post({ username, profileImg, caption, image, likes }) {

    const truncate = (str) => {
        return str.length > 80 ? str.substring(0, 80) + "..." : str;
    }

    return (
        <div className="post">
            <div className="post__top">
                <div class="post__topLeft">
                    <img src={profileImg} alt={username} />
                    <p>{username}</p>
                </div>
                <div class="post__topRight">{/* more horizon icon */}</div>
            </div>
            <div className="post__image">
                <img src={image} alt='' />
            </div>
            <div className="post__bottom">
                <div class="post__icons">
                    <FavoriteBorderOutlined className="post__iconsLeft" sx={{
                        fontSize: 30,
                        marginRight: '10px'
                    }} />
                    <ChatBubbleOutline className="post__iconsLeft" sx={{
                        fontSize: 30,
                    }} />
                </div>
                <div>{likes} likes</div>
                <div class="post__caption">
                    <strong>{username}</strong>
                    <p>{truncate(caption)}</p>
                </div>
            </div>
        </div>
    );
}

export default Post;
