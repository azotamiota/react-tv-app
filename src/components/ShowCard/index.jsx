import React from "react";

const ShowCard = ({data}) => {

   return <div className="show-card">
            <h2>{data.title}</h2>
            <img className='image' src={data['image']}/>
            <p>{data.description}</p>
            {/* <div>{rating}</div> */}
        </div>
}

export default ShowCard;
