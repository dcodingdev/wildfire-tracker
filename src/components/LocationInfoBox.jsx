// const LocationInfoBox = ({ info, onClose }) => {
//     return (
//         <div className="location-info">
//             <button className="close-btn" onClick={onClose}>X</button>
//             <h2>Event Location Info</h2>
//             <ul>
//                 <li>ID: <strong>{info.id}</strong></li>
//                 <li>TITLE: <strong>{info.title}</strong></li>
//             </ul>
//         </div>
//     )
// }

// export default LocationInfoBox


// const LocationInfoBox = ({ info, onClose }) => {
//     return (
//         <div className="location-info">
//             <button className="close-btn" onClick={onClose}>X</button>
//             <h2>Event Info</h2>
//             <ul>
//                 <li><strong>ID:</strong> {info.id}</li>
//                 <li><strong>Title:</strong> {info.title}</li>
//                 <li><strong>Date:</strong> {new Date(info.date).toLocaleString()}</li>
//                 <li><strong>Coordinates:</strong> {info.lat.toFixed(2)}, {info.lng.toFixed(2)}</li>
//             </ul>
//         </div>
//     )
// }

// export default LocationInfoBox


// const LocationInfoBox = ({ info, onClose }) => {
//     return (
//       <div className="location-info">
//         <button className="close-btn" onClick={onClose}>X</button>
//         <h2>Event Info</h2>
//         <ul>
//           <li><strong>ID:</strong> {info.id}</li>
//           <li><strong>Title:</strong> {info.title}</li>
//           <li><strong>Date:</strong> {new Date(info.date).toLocaleString()}</li>
//           <li><strong>Coordinates:</strong> {info.lat.toFixed(2)}, {info.lng.toFixed(2)}</li>
//         </ul>
//       </div>
//     );
//   };
  
//   export default LocationInfoBox;

const LocationInfoBox = ({ info, onClose }) => {
    return (
      <div className="location-info">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Event Info</h2>
        <ul>
          <li><strong>ID:</strong> {info.id}</li>
          <li><strong>Title:</strong> {info.title}</li>
          <li><strong>Date:</strong> {new Date(info.date).toLocaleString()}</li>
          <li><strong>Coordinates:</strong> {info.lat.toFixed(2)}, {info.lng.toFixed(2)}</li>
        </ul>
      </div>
    );
  };
  
  export default LocationInfoBox;
  
  