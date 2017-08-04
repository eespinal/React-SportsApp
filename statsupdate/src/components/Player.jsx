import React from 'react';

const Player= ({onClick, id, info, stats})=>(

    <div className="card">
     <img className="card-img-top" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png` } alt="Pulgares"/>
     <div className="card-block">
       <h4 className="card-title">{info.displayFirstLast}</h4>
       <div className="card-text">
         <ul>
           <li> pts: {stats.pts} </li>
           <li> Ast: {stats.ast}</li>
           <li> Reb: {stats.reb}</li>
           <li> Pie: {stats.pie}</li>
         </ul>
       </div>
       <button className="btn btn-primary" onClick={() => onClick({id, info, stats})}> Add </button>
     </div>
  </div>
)
export default Player;
