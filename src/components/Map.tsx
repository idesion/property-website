import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState(() => localStorage.getItem('mapbox_token') || '');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !token) return;

    // Initialize map
    mapboxgl.accessToken = token;
    localStorage.setItem('mapbox_token', token);
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-74.006, 40.7128], // New York coordinates
      zoom: 12
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    setIsMapInitialized(true);
  };

  useEffect(() => {
    if (token) {
      initializeMap();
    }
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isMapInitialized) {
    return (
      <div className="map-container flex flex-col items-center justify-center space-y-4 bg-white p-8">
        <h3 className="text-lg font-semibold">Enter your Mapbox Token</h3>
        <p className="text-sm text-gray-600 mb-4">
          To use the map feature, please enter your Mapbox public token. 
          You can find this in your Mapbox account dashboard at{' '}
          <a 
            href="https://mapbox.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            mapbox.com
          </a>
        </p>
        <div className="w-full max-w-md space-y-2">
          <Input
            type="text"
            placeholder="pk.eyJ1..."
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full"
          />
          <Button 
            onClick={initializeMap}
            className="w-full"
            disabled={!token}
          >
            Initialize Map
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="map-container">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;