import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // Initialize map only if it hasn't been initialized

    mapboxgl.accessToken =
      "pk.eyJ1IjoiaWRlc2lvbiIsImEiOiJjbHBtcmRodnAwYXIyMmlwZ296dnlwaGcxIn0.ad8RnHG4ygclJ_5QtixS6A";

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [101.73765233178965, 3.0878538500371255], // New York coordinates
      zoom: 12,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => {
      map.current?.remove(); // Cleanup map on unmount
      map.current = null;
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="map-container">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;
