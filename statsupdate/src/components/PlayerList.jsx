// import React from 'react';
//
// const PlayerList = () => (
//   <div className='d-flex align-items-start flex-row saveCompo'>
//
//       {isDislayingAsRows ?
//         <div className='container tabla'>
//           <table className="table table-striped">
//             <thead className='playerTableTitles'>
//               <tr>
//                 <th className="numero">#</th>
//                 <th className="nombre">Name</th>
//                 <th>Ppg</th>
//                 <th>Ast</th>
//                 <th>Reb</th>
//                 <th>Pie</th>
//                 <th>Remove</th>
//               </tr>
//             </thead>
//             {savedPlayers.length > 0 ?
//               savedPlayers.map((player,index) => <SavedRowApp key={player.id} {...player} index={index}/>)
//               : <tr><td colspan="8">No data</td></tr>
//             }
//           </table>
//         </div>:savedPlayers.map(player => <SavedCardApp key={player.id} {...player} />)}
//
// )
// export default PlayerList;
