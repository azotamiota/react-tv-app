import React from "react";

const ShowCard = ({data}) => {

   return <div className="show-card">
            <h2>{data.title}</h2>
            <img className='image' src={data['image']}/>
            <p role='paragraph' >{data.description}</p>
            {/* <div>{rating}</div> */}
        </div>
}

export default ShowCard;

// import React from 'react';

// const ShowCard = ({ data }) => {

//     return <div className="show-card">
//                 <img src={ data["image"] ? data["image"]["medium"] : ""}></img>
//                 <h2>{data.name}</h2>
//                 <p dangerouslySetInnerHTML={{__html: data.summary}}></p>
//             </div>

// }

// export default ShowCard;
