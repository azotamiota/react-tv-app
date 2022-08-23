import React from "react";

const ShowCard = ({data}) => {

   return <div className="show-card">
            <h2>{data.name}</h2>
            <img src={data['image'] ? data['image']['medium'] : ''}/>
            <p>{data.summary}</p>
            {/* <div>{rating}</div> */}
        </div>
}

export default ShowCard;
