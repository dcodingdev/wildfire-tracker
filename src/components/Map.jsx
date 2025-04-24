// import { useState } from 'react'
// import { MapContainer, TileLayer, Marker } from 'react-leaflet'
// import L from 'leaflet'
// import 'leaflet/dist/leaflet.css'
// import LocationInfoBox from './LocationInfoBox'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/fire-alert'
// import ReactDOMServer from 'react-dom/server'

// // Fix Leaflet marker icon issue
// delete L.Icon.Default.prototype._getIconUrl
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// })

// // Create custom fire icon using Iconify
// const fireIcon = L.divIcon({
//     html: ReactDOMServer.renderToString(<Icon icon={locationIcon} className="location-icon" />),
//     className: 'leaflet-div-icon',
//     iconSize: [30, 30],
//     iconAnchor: [15, 30],
// })

// const NATURAL_EVENT_WILDFIRE = 8

// const Map = ({ eventData, center, zoom }) => {
//     const [locationInfo, setLocationInfo] = useState(null)

//     const markers = eventData
//         .filter(ev => ev.categories[0].id === NATURAL_EVENT_WILDFIRE)
//         .map((ev, index) => {
//             const [lng, lat] = ev.geometries[0].coordinates
//             return (
//                 <Marker 
//                     key={index} 
//                     position={[lat, lng]} 
//                     icon={fireIcon}
//                     eventHandlers={{
//                         click: () => {
//                             setLocationInfo({ id: ev.id, title: ev.title })
//                         }
//                     }}
//                 />
//             )
//         })

//     return (
//         <div className="map" style={{ height: '100vh', width: '100%', position: 'relative' }}>
//             <MapContainer center={[center.lat, center.lng]} zoom={zoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
//                 <TileLayer
//                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 {markers}
//             </MapContainer>
//             {locationInfo && <LocationInfoBox info={locationInfo} onClose={() => setLocationInfo(null)} />}
//         </div>
//     )
// }

// Map.defaultProps = {
//     center: {
//         lat: 42.3265,
//         lng: -122.8756
//     },
//     zoom: 6
// }

// export default Map


// import { useState } from 'react'
// import { MapContainer, TileLayer, Marker } from 'react-leaflet'
// import L from 'leaflet'
// import 'leaflet/dist/leaflet.css'
// import LocationInfoBox from './LocationInfoBox'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/fire-alert'
// import ReactDOMServer from 'react-dom/server'

// // Fix Leaflet default icon path
// delete L.Icon.Default.prototype._getIconUrl
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// })

// // Custom animated fire icon using Iconify
// const fireIcon = L.divIcon({
//     html: ReactDOMServer.renderToString(<Icon icon={locationIcon} className="location-icon" />),
//     className: 'leaflet-div-icon',
//     iconSize: [30, 30],
//     iconAnchor: [15, 30],
// })

// const NATURAL_EVENT_WILDFIRE = 8

// const Map = ({ eventData, center, zoom }) => {
//     const [selectedEvents, setSelectedEvents] = useState([])

//     const handleMarkerClick = (ev, lat, lng) => {
//         const newEvent = {
//             id: ev.id,
//             title: ev.title,
//             date: ev.geometries[0].date || 'Unknown',
//             lat,
//             lng
//         }

//         setSelectedEvents(prev => {
//             // Avoid duplicates
//             if (prev.some(e => e.id === newEvent.id)) return prev
//             return [...prev, newEvent]
//         })
//     }

//     const markers = eventData
//         .filter(ev => ev.categories[0].id === NATURAL_EVENT_WILDFIRE)
//         .map((ev, index) => {
//             const [lng, lat] = ev.geometries[0].coordinates
//             return (
//                 <Marker
//                     key={index}
//                     position={[lat, lng]}
//                     icon={fireIcon}
//                     eventHandlers={{
//                         click: () => handleMarkerClick(ev, lat, lng)
//                     }}
//                 />
//             )
//         })

//     return (
//         <div className="map" style={{ height: '100vh', width: '100%', position: 'relative' }}>
//             <MapContainer center={[center.lat, center.lng]} zoom={zoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
//                 <TileLayer
//                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 {markers}
//             </MapContainer>

//             {selectedEvents.length > 0 && (
//                 <div className="location-info-list">
//                     {selectedEvents.map((info) => (
//                         <LocationInfoBox
//                             key={info.id}
//                             info={info}
//                             onClose={() =>
//                                 setSelectedEvents(prev =>
//                                     prev.filter(e => e.id !== info.id)
//                                 )
//                             }
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// }

// Map.defaultProps = {
//     center: {
//         lat: 42.3265,
//         lng: -122.8756
//     },
//     zoom: 6
// }

// export default Map

// import { useState } from 'react';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import LocationInfoBox from './LocationInfoBox';
// import { Icon } from '@iconify/react';
// import locationIcon from '@iconify/icons-mdi/fire-alert';
// import ReactDOMServer from 'react-dom/server';

// // Import Leaflet icon images
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// // Fix Leaflet default icon path using imported images
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

// // Custom animated fire icon using Iconify
// const fireIcon = L.divIcon({
//   html: ReactDOMServer.renderToString(<Icon icon={locationIcon} className="location-icon" />),
//   className: 'leaflet-div-icon',
//   iconSize: [30, 30],
//   iconAnchor: [15, 30],
// });

// const NATURAL_EVENT_WILDFIRE = 8;

// const Map = ({ eventData, center, zoom }) => {
//   const [selectedEvents, setSelectedEvents] = useState([]);

//   const handleMarkerClick = (ev) => {
//     const coordinates = ev.geometries?.[0]?.coordinates;

//     if (Array.isArray(coordinates) && coordinates.length === 2) {
//       const [lng, lat] = coordinates;

//       const newEvent = {
//         id: ev.id,
//         title: ev.title,
//         date: ev.geometries[0]?.date || 'Unknown',
//         lat,
//         lng,
//       };

//       setSelectedEvents((prev) => {
//         // Avoid duplicates
//         if (prev.some((e) => e.id === newEvent.id)) return prev;
//         return [...prev, newEvent];
//       });
//     } else {
//       console.error('Invalid event data (no coordinates)', ev);
//     }
//   };

//   // Only proceed if there is event data
//   const markers = eventData
//     .filter((ev) => ev.categories && ev.categories[0].id === NATURAL_EVENT_WILDFIRE)
//     .map((ev, index) => {
//       const coordinates = ev.geometries?.[0]?.coordinates;
//       if (!coordinates || coordinates.length !== 2) {
//         console.warn('Skipping marker due to invalid coordinates:', ev);
//         return null;
//       }
//       const [lng, lat] = coordinates;

//       return (
//         <Marker
//           key={index}
//           position={[lat, lng]}
//           icon={fireIcon}
//           eventHandlers={{
//             click: () => handleMarkerClick(ev),
//           }}
//         />
//       );
//     });

//   if (eventData.length === 0) {
//     return (
//       <div className="map">
//         <h3>No wildfire events available at the moment.</h3>
//       </div>
//     );
//   }

//   return (
//     <div className="map" style={{ height: '100vh', width: '100%', position: 'relative' }}>
//       <MapContainer
//         center={[center.lat || 42.3265, center.lng || -122.8756]} // Default values if center is undefined
//         zoom={zoom}
//         scrollWheelZoom={true}
//         style={{ height: '100%', width: '100%' }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {markers}
//       </MapContainer>

//       {selectedEvents.length > 0 && (
//         <div className="location-info-list">
//           {selectedEvents.map((info) => (
//             <LocationInfoBox
//               key={info.id}
//               info={info}
//               onClose={() =>
//                 setSelectedEvents((prev) => prev.filter((e) => e.id !== info.id))
//               }
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// Map.defaultProps = {
//   center: {
//     lat: 42.3265,
//     lng: -122.8756,
//   },
//   zoom: 6,
// };

// export default Map;

// import { useState } from 'react';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import LocationInfoBox from './LocationInfoBox';
// import { Icon } from '@iconify/react';
// import locationIcon from '@iconify/icons-mdi/fire-alert';
// import ReactDOMServer from 'react-dom/server';

// // Import Leaflet icon images
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// // Fix Leaflet default icon path using imported images
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

// // Custom fire icon using Iconify
// const fireIcon = L.divIcon({
//   html: ReactDOMServer.renderToString(
//     <Icon icon={locationIcon} className="location-icon" />
//   ),
//   className: 'leaflet-div-icon',
//   iconSize: [30, 30],
//   iconAnchor: [15, 30],
// });

// const NATURAL_EVENT_WILDFIRE = 8;

// const Map = ({ eventData, center, zoom }) => {
//   const [selectedEvents, setSelectedEvents] = useState([]);

//   // Safe defaulting for center
//   const { lat = 42.3265, lng = -122.8756 } = center || {};

//   const handleMarkerClick = (ev) => {
//     const coordinates = ev.geometries?.[0]?.coordinates;

//     if (Array.isArray(coordinates) && coordinates.length === 2) {
//       const [lng, lat] = coordinates;

//       const newEvent = {
//         id: ev.id,
//         title: ev.title,
//         date: ev.geometries[0]?.date || 'Unknown',
//         lat,
//         lng,
//       };

//       setSelectedEvents((prev) => {
//         // Avoid duplicates
//         if (prev.some((e) => e.id === newEvent.id)) return prev;
//         return [...prev, newEvent];
//       });
//     } else {
//       console.error('Invalid event data (no coordinates)', ev);
//     }
//   };

//   // Filter only wildfire events and render markers
//   const markers = eventData
//     .filter((ev) => ev.categories?.[0]?.id === NATURAL_EVENT_WILDFIRE)
//     .map((ev, index) => {
//       const coordinates = ev.geometries?.[0]?.coordinates;
//       if (!coordinates || coordinates.length !== 2) {
//         console.warn('Skipping marker due to invalid coordinates:', ev);
//         return null;
//       }
//       const [lng, lat] = coordinates;

//       return (
//         <Marker
//           key={index}
//           position={[lat, lng]}
//           icon={fireIcon}
//           eventHandlers={{
//             click: () => handleMarkerClick(ev),
//           }}
//         />
//       );
//     });

//   if (eventData.length === 0) {
//     return (
//       <div className="map">
//         <h3>No wildfire events available at the moment.</h3>
//       </div>
//     );
//   }

//   return (
//     <div className="map" style={{ height: '100vh', width: '100%', position: 'relative' }}>
//       <MapContainer
//         center={[lat, lng]}
//         zoom={zoom}
//         scrollWheelZoom={true}
//         style={{ height: '100%', width: '100%' }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {markers}
//       </MapContainer>

//       {selectedEvents.length > 0 && (
//         <div className="location-info-list">
//           {selectedEvents.map((info) => (
//             <LocationInfoBox
//               key={info.id}
//               info={info}
//               onClose={() =>
//                 setSelectedEvents((prev) => prev.filter((e) => e.id !== info.id))
//               }
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // Default props if none provided
// Map.defaultProps = {
//   center: {
//     lat: 42.3265,
//     lng: -122.8756,
//   },
//   zoom: 6,
// };

// export default Map;

// import { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import LocationInfoBox from './LocationInfoBox';
// import { Icon } from '@iconify/react';
// import locationIcon from '@iconify/icons-mdi/fire-alert';
// import ReactDOMServer from 'react-dom/server';

// // Fix Leaflet default icon path using images in public/leaflet/dist/images/
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: '/leaflet/dist/images/marker-icon-2x.png',
//   iconUrl: '/leaflet/dist/images/marker-icon.png',
//   shadowUrl: '/leaflet/dist/images/marker-shadow.png',
// });

// // Custom fire icon using Iconify (optional)
// const fireIcon = L.icon({
//   iconUrl: '/leaflet/dist/images/marker-icon.png', // Example image URL from public
//   iconSize: [30, 30],
//   iconAnchor: [15, 30],
// });

// const NATURAL_EVENT_WILDFIRE = 8;

// const Map = ({ eventData, center, zoom }) => {
//   const [selectedEvents, setSelectedEvents] = useState([]);
  
//   console.log('Event Data in Map:', eventData);  // <-- Added this line for debugging

//   const { lat = 42.3265, lng = -122.8756 } = center || {};

//   const handleMarkerClick = (ev) => {
//     const coordinates = ev.geometries?.[0]?.coordinates;

//     if (Array.isArray(coordinates) && coordinates.length === 2) {
//       const [lng, lat] = coordinates;

//       const newEvent = {
//         id: ev.id,
//         title: ev.title,
//         date: ev.geometries[0]?.date || 'Unknown',
//         lat,
//         lng,
//       };

//       setSelectedEvents((prev) => {
//         // Avoid duplicates
//         if (prev.some((e) => e.id === newEvent.id)) return prev;
//         return [...prev, newEvent];
//       });
//     } else {
//       console.error('Invalid event data (no coordinates)', ev);
//     }
//   };

//   // Filter only wildfire events and render markers
//   const markers = eventData
//     .filter((ev) => ev.categories?.[0]?.id === NATURAL_EVENT_WILDFIRE)
//     .map((ev, index) => {
//       const coordinates = ev.geometries?.[0]?.coordinates;
//       console.log('Coordinates:', coordinates);  // <-- Added this line for debugging
//       if (!coordinates || coordinates.length !== 2) {
//         console.warn('Skipping marker due to invalid coordinates:', ev);
//         return null;
//       }
//       const [lng, lat] = coordinates;

//       return (
//         <Marker
//           key={index}
//           position={[lat, lng]}
//           icon={fireIcon}
//           eventHandlers={{
//             click: () => handleMarkerClick(ev),
//           }}
//         />
//       );
//     });

//   if (eventData.length === 0) {
//     return (
//       <div className="map">
//         <h3>No wildfire events available at the moment.</h3>
//       </div>
//     );
//   }

//   return (
//     <div className="map" style={{ height: '100vh', width: '100%', position: 'relative' }}>
//       <MapContainer
//         center={[lat, lng]}
//         zoom={zoom}
//         scrollWheelZoom={true}
//         style={{ height: '100%', width: '100%' }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {markers}
//       </MapContainer>

//       {selectedEvents.length > 0 && (
//         <div className="location-info-list">
//           {selectedEvents.map((info) => (
//             <LocationInfoBox
//               key={info.id}
//               info={info}
//               onClose={() =>
//                 setSelectedEvents((prev) => prev.filter((e) => e.id !== info.id))
//               }
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // Default props if none provided
// Map.defaultProps = {
//   center: {
//     lat: 42.3265,
//     lng: -122.8756,
//   },
//   zoom: 6,
// };

// export default Map;

// import { useState } from 'react';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import LocationInfoBox from './LocationInfoBox';
// import { Icon } from '@iconify/react';
// import locationIcon from '@iconify/icons-mdi/fire-alert';
// import ReactDOMServer from 'react-dom/server';

// // Custom Fire Icon using Iconify
// const fireIcon = L.divIcon({
//   html: ReactDOMServer.renderToString(<Icon icon={locationIcon} className="location-icon" />),
//   className: 'leaflet-div-icon',
//   iconSize: [30, 30],
//   iconAnchor: [15, 30],
// });

// const NATURAL_EVENT_WILDFIRE = 8;

// const Map = ({ eventData, center, zoom }) => {
//   const [selectedEvents, setSelectedEvents] = useState([]);
//   const { lat = 42.3265, lng = -122.8756 } = center || {};

//   const handleMarkerClick = (ev) => {
//     const coordinates = ev.geometries?.[0]?.coordinates;

//     if (Array.isArray(coordinates) && coordinates.length === 2) {
//       const [lng, lat] = coordinates;

//       const newEvent = {
//         id: ev.id,
//         title: ev.title,
//         date: ev.geometries[0]?.date || 'Unknown',
//         lat,
//         lng,
//       };

//       setSelectedEvents((prev) => {
//         if (prev.some((e) => e.id === newEvent.id)) return prev;
//         return [...prev, newEvent];
//       });
//     } else {
//       console.error('Invalid event data (no coordinates)', ev);
//     }
//   };

//   const markers = eventData
//     .filter((ev) => ev.categories?.[0]?.id === NATURAL_EVENT_WILDFIRE)
//     .map((ev, index) => {
//       const coordinates = ev.geometries?.[0]?.coordinates;
//       if (!coordinates || coordinates.length !== 2) {
//         console.warn('Skipping marker due to invalid coordinates:', ev);
//         return null;
//       }
//       const [lng, lat] = coordinates;

//       return (
//         <Marker
//           key={index}
//           position={[lat, lng]}
//           icon={fireIcon}
//           eventHandlers={{
//             click: () => handleMarkerClick(ev),
//           }}
//         />
//       );
//     });

//   return (
//     <div className="map" style={{ height: '100vh', width: '100%', position: 'relative' }}>
//       <MapContainer
//         center={[lat, lng]}
//         zoom={zoom || 6}  // Ensure a reasonable default zoom
//         scrollWheelZoom={true}
//         style={{ height: '100%', width: '100%' }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {markers}
//       </MapContainer>

//       {selectedEvents.length > 0 && (
//         <div className="location-info-list">
//           {selectedEvents.map((info) => (
//             <LocationInfoBox
//               key={info.id}
//               info={info}
//               onClose={() =>
//                 setSelectedEvents((prev) => prev.filter((e) => e.id !== info.id))
//               }
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// Map.defaultProps = {
//   center: { lat: 42.3265, lng: -122.8756 },
//   zoom: 6,
// };

// export default Map;


// import { useState } from 'react';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import LocationInfoBox from './LocationInfoBox';
// import { Icon } from '@iconify/react';
// import locationIcon from '@iconify/icons-mdi/fire-alert';
// import ReactDOMServer from 'react-dom/server';

// // Custom Fire Icon using Iconify
// const fireIcon = L.divIcon({
//   html: ReactDOMServer.renderToString(<Icon icon={locationIcon} className="location-icon" />),
//   className: 'leaflet-div-icon',
//   iconSize: [30, 30],
//   iconAnchor: [15, 30],
// });

// const NATURAL_EVENT_WILDFIRE = 8;

// const Map = ({ eventData, center, zoom }) => {
//   const [selectedEvents, setSelectedEvents] = useState([]);
//   const { lat = 42.3265, lng = -122.8756 } = center || {};

//   const handleMarkerClick = (ev) => {
//     const coordinates = ev.geometries?.[0]?.coordinates;

//     if (Array.isArray(coordinates) && coordinates.length === 2) {
//       const [lng, lat] = coordinates;

//       const newEvent = {
//         id: ev.id,
//         title: ev.title,
//         date: ev.geometries[0]?.date || 'Unknown',
//         lat,
//         lng,
//       };

//       setSelectedEvents((prev) => {
//         if (prev.some((e) => e.id === newEvent.id)) return prev; // Avoid duplicates
//         return [...prev, newEvent];
//       });
//     } else {
//       console.error('Invalid event data (no coordinates)', ev);
//     }
//   };

//   const markers = eventData
//     .filter((ev) => ev.categories?.[0]?.id === NATURAL_EVENT_WILDFIRE)
//     .map((ev, index) => {
//       const coordinates = ev.geometries?.[0]?.coordinates;
//       if (!coordinates || coordinates.length !== 2) {
//         console.warn('Skipping marker due to invalid coordinates:', ev);
//         return null;
//       }
//       const [lng, lat] = coordinates;

//       return (
//         <Marker
//           key={index}
//           position={[lat, lng]}
//           icon={fireIcon}
//           eventHandlers={{
//             click: () => handleMarkerClick(ev), // Handle marker click
//           }}
//         />
//       );
//     });

//   return (
//     <div className="map" style={{ height: '100vh', width: '100%', position: 'relative' }}>
//       <MapContainer
//         center={[lat, lng]}
//         zoom={zoom || 6}  // Ensure a reasonable default zoom
//         scrollWheelZoom={true}
//         style={{ height: '100%', width: '100%' }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {markers}
//       </MapContainer>

//       {/* Only render LocationInfoBox if selectedEvents is not empty */}
//       {selectedEvents.length > 0 && (
//         <div className="location-info-list">
//           {selectedEvents.map((info) => (
//             info && info.id ? (  // Check if info and info.id are defined
//               <LocationInfoBox
//                 key={info.id}
//                 info={info}
//                 onClose={() =>
//                   setSelectedEvents((prev) => prev.filter((e) => e.id !== info.id))  // Close event info on close button click
//                 }
//               />
//             ) : null
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// Map.defaultProps = {
//   center: { lat: 42.3265, lng: -122.8756 },
//   zoom: 6,
// };

// export default Map;
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import fireIconUrl from '../public/fire.png'
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
import ReactDOMServer from 'react-dom/server';

// Default Coordinates
const defaultCenter = { lat: 42.3265, lng: -122.8756 };
const defaultZoom = 6;

// Simple Map Component
const Map = ({ eventData }) => {
  const [selectedEvents, setSelectedEvents] = useState([]);
  
  const handleMarkerClick = (ev) => {
    const coordinates = ev.geometries?.[0]?.coordinates;
    if (Array.isArray(coordinates) && coordinates.length === 2) {
      const [lng, lat] = coordinates;
      const newEvent = {
        id: ev.id,
        title: ev.title,
        date: ev.geometries[0]?.date || 'Unknown',
        lat,
        lng,
      };
      setSelectedEvents((prev) => {
        if (prev.some((e) => e.id === newEvent.id)) return prev;
        return [...prev, newEvent];
      });
    } else {
      console.error('Invalid event data (no coordinates)', ev);
    }
  };

const fireIcon = L.icon({
    iconUrl:  fireIconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41]
  });
  

  // Markers
  const markers = eventData
    .filter((ev) => ev.categories?.[0]?.id === 8) // Filter Wildfire events
    .map((ev, index) => {
      const coordinates = ev.geometries?.[0]?.coordinates;
      if (!coordinates || coordinates.length !== 2) {
        console.warn('Skipping marker due to invalid coordinates:', ev);
        return null;
      }
      const [lng, lat] = coordinates;
      return (
        <Marker
          key={index}
          position={[lat, lng]}
          icon={fireIcon}
          eventHandlers={{
            click: () => handleMarkerClick(ev),
          }}
        >
          <Popup>
            <h4>{ev.title}</h4>
            <p>{new Date(ev.geometries[0]?.date).toLocaleString()}</p>
          </Popup>
        </Marker>
      );
    });

  return (
    <div className="map" style={{ height: '100vh', width: '100%' }}>
      <MapContainer
        center={[defaultCenter.lat, defaultCenter.lng]}
        zoom={defaultZoom}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </MapContainer>

      {selectedEvents.length > 0 && (
        <div className="location-info-list">
          {selectedEvents.map((info) => (
            <div key={info.id} className="location-info">
              <h2>Event Info</h2>
              <ul>
                <li><strong>ID:</strong> {info.id}</li>
                <li><strong>Title:</strong> {info.title}</li>
                <li><strong>Date:</strong> {new Date(info.date).toLocaleString()}</li>
                <li><strong>Coordinates:</strong> {info.lat.toFixed(2)}, {info.lng.toFixed(2)}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Map;
