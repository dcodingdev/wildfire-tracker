// import 'leaflet/dist/leaflet.css';

// import { useState, useEffect } from 'react'
// import Map from './components/Map.jsx'
// import Loader from './components/Loader.jsx'
// import Header from './components/Header.jsx'

// function App() {
//   const [eventData, setEventData] = useState([])
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     const fetchEvents = async () => {
//       setLoading(true)
//       try {
//         const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
//         const { events } = await res.json()
//         setEventData(events)
//       } catch (err) {
//         console.error("Failed to fetch events:", err)
//       }
//       setLoading(false)
//     }

//     fetchEvents()
//   }, [])

//   return (
//     <div>
//       <Header />
//       {!loading ? <Map eventData={eventData} /> : <Loader />}
//     </div>
//   )
// }

// export default App





// import { useState, useEffect } from 'react';
// import Map from './components/Map';
// import Loader from './components/Loader';
// import Header from './components/Header';

// function App() {
//   const [eventData, setEventData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
//         const data = await res.json();

//         console.log('Fetched Data:', data);

//         const { events } = data;

//         if (events && events.length > 0) {
//           setEventData(events);
//         } else {
//           setError('No events found.');
//         }
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         setError('Failed to fetch events. Please check your network connection or try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <div>
//       <Header />
//       {error ? (
//         <div className="error-message">
//           <p>{error}</p>
//         </div>
//       ) : !loading ? (
//         <Map eventData={eventData} />
//       ) : (
//         <Loader />
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events');
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setEvents(data.events);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   if (loading) return <p>Loading events...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>NASA Natural Events</h1>
//       <ul>
//         {events.map(event => (
//           <li key={event.id}>
//             <strong>{event.title}</strong> — {event.categories.map(cat => cat.title).join(', ')}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// import { useState, useEffect } from 'react';
// import Map from './components/Map';
// import Loader from './components/Loader';
// import Header from './components/Header';

// function App() {
//   const [eventData, setEventData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         setLoading(true);
//         // const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
//         const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events');

//         const data = await res.json();

//         console.log('Fetched Data:', data);

//         const { events } = data;

//         if (events && events.length > 0) {
//           setEventData(events);
//         } else {
//           setError('No events found.');
//         }
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         setError('Failed to fetch events. Please check your network connection or try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <div>
//       <Header />
//       {error ? (
//         <div className="error-message">
//           <p>{error}</p>
//         </div>
//       ) : !loading ? (
//         <Map eventData={eventData} />
//       ) : (
//         <Loader />
//       )}
//     </div>
//   );
// }

// export default App;


// import { useState, useEffect } from 'react';
// import Map from './components/Map';
// import Loader from './components/Loader';
// import Header from './components/Header';

// function App() {
//   const [eventData, setEventData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         setLoading(true);
//         // const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
//         const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events');

//         const data = await res.json();
//         console.log('Fetched Data:', data);  // Log fetched data for debugging

//         const { events } = data;

//         if (events && events.length > 0) {
//           setEventData(events);
//         } else {
//           setError('No events found.');
//         }
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         setError('Failed to fetch events. Please check your network connection or try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <div>
//       <Header />
//       {error ? (
//         <div className="error-message">
//           <p>{error}</p>
//         </div>
//       ) : !loading ? (
//         <Map eventData={eventData} />
//       ) : (
//         <Loader />
//       )}
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import Map from './components/Map';
import Loader from './components/Loader';
import Header from './components/Header';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events');
        const data = await res.json();

        console.log('Fetched Data:', data);
        const { events } = data;

        if (events && events.length > 0) {
          setEventData(events);
        } else {
          setError('No events found.');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        setError('Failed to fetch events. Please check your network connection or try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      {error ? (
        <div className="error-message">
          <p>{error}</p>
        </div>
      ) : !loading ? (
        <Map eventData={eventData} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
