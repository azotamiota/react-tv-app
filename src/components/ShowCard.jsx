import React from "react";

const ShowCard = ({data}) => {

   return <div className="show-card">
            <h2>{data.name}</h2>
            {/* <p>{description}</p>
            <div>{rating}</div> */}
        </div>
}

export default ShowCard;
