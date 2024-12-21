import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface Area {
  name: string;
  coordinates: { lat: number; lng: number };
}

interface MapProps {
  areas: Area[];
}

/**
 * Map component to display a map with dynamic coordinates.
 * @param coordinates - The coordinates to center the map.
 */
const Map: React.FC<MapProps> = ({ areas }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedArea, setSelectedArea] = useState(areas[0]);

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // Initialize map only if it hasn't been initialized

    mapboxgl.accessToken =
      "pk.eyJ1IjoiaWRlc2lvbiIsImEiOiJjbHBtcmRodnAwYXIyMmlwZ296dnlwaGcxIn0.ad8RnHG4ygclJ_5QtixS6A";

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [selectedArea.coordinates.lng, selectedArea.coordinates.lat], // Initial coordinates
      zoom: 12,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => {
      map.current?.remove(); // Cleanup map on unmount
      map.current = null;
    };
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    if (map.current) {
      map.current.setCenter([
        selectedArea.coordinates.lng,
        selectedArea.coordinates.lat,
      ]); // Update map center when coordinates change
    }
  }, [selectedArea]);

  const handleAreaSelection = (area) => {
    setSelectedArea(area);
  };

  return (
    <div>
      <div className="container mx-auto py-5 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Explore Our Coverage Areas
          </h2>
          <p className="text-gray-600 mb-4">
            We cover a wide range of areas to help you find your perfect home.
          </p>
          <div className="flex justify-center space-x-4">
            {areas.map((area, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedArea.name === area.name
                    ? "bg-primary text-white"
                    : "bg-white text-primary border border-primary"
                }`}
                onClick={() => handleAreaSelection(area)}
              >
                {area.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="-mx-4">
        <div className="map-container">
          <div ref={mapContainer} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Map;
