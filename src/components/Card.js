const Card = (props) =>{
    const {resData} = props;
    const {name, costForTwo, cuisines, avgRating} = resData.info;
    return (
        <div className='card'>
            <img className="resImage" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`} alt="" />
            <h1>{name}</h1>
            <h2>{costForTwo}</h2>
            <p>{cuisines.join(', ')}</p>
            <h2>{avgRating}</h2>
        </div>
    )
}

export default Card;