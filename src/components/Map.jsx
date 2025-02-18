import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map({ senderCoordinates, receiverCoordinates, driverCoordinates, height }) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loadMap = async () => {
      try {
        if (!senderCoordinates || !receiverCoordinates || !driverCoordinates) {
          console.error('Invalid coordinates provided');
          return;
        }

        const midpoint = [
          (senderCoordinates[0] + receiverCoordinates[0]) / 2,
          (senderCoordinates[1] + receiverCoordinates[1]) / 2,
        ];

        mapboxgl.accessToken = 'pk.eyJ1IjoibXVnZW4yNDciLCJhIjoiY2t6YXc1d3ZtMWp5cDJvczhtaHNzNng5ZiJ9.ChuFB5ls73656qlh1alvwA';

        const initializedMap = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: midpoint,
          zoom: 10,
        });

        // Add markers for sender, receiver, and driver
        new mapboxgl.Marker({ color: 'blue' })
          .setLngLat(senderCoordinates)
          .addTo(initializedMap);

        new mapboxgl.Marker({ color: 'red' })
          .setLngLat(receiverCoordinates)
          .addTo(initializedMap);

        new mapboxgl.Marker({ color: 'green' })
          .setLngLat(driverCoordinates)
          .addTo(initializedMap);

        // Function to fetch route
        const fetchRoute = async (start, end, routeId, color) => {
          const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`;
          const response = await fetch(url);
          const data = await response.json();

          if (!data.routes || data.routes.length === 0) {
            console.error('No route found');
            return;
          }

          const route = data.routes[0].geometry;

          initializedMap.addSource(routeId, {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: route,
            },
          });

          initializedMap.addLayer({
            id: routeId,
            type: 'line',
            source: routeId,
            layout: { 'line-join': 'round', 'line-cap': 'round' },
            paint: { 'line-color': color, 'line-width': 5 },
          });
        };

        // Fetch routes
        await fetchRoute(senderCoordinates, receiverCoordinates, 'route-sender', '#3887be'); // Blue
        await fetchRoute(driverCoordinates, receiverCoordinates, 'route-driver', '#34D399'); // Green

        setMap(initializedMap);
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    loadMap();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [senderCoordinates, receiverCoordinates, driverCoordinates]);

  return <div id="map" style={{ height: `${height}vh` }} />;
}

export default Map;
