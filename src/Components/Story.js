import "./css/Stories.css"

function Story({ img, name, isActive }) {
    return (
        <div className='story'>
            <img className={`story__image ${isActive && 'story__imageActive'}`} src={img} alt="" />
            <p>@{name.toLowerCase().trim()}</p>
        </div>
    )
}

export default Story