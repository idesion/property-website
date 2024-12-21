import { useState, useRef, useEffect } from "react";
import PropertyListingCard from "@/components/PropertyListingCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SlidersHorizontal, Map, List } from "lucide-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const SAMPLE_PROPERTIES = [
  {
    id: "1",
    image: "/placeholder.svg",
    price: 355000,
    beds: 3,
    baths: 2.5,
    sqft: 1675,
    address: "318 Crosswalk Dr",
    city: "Auburn",
    state: "GA",
  },
  {
    id: "2",
    image: "/placeholder.svg",
    price: 465000,
    beds: 5,
    baths: 4,
    sqft: 3562,
    address: "607 Stream Ct",
    city: "Fairburn",
    state: "GA",
  },
  {
    id: "3",
    image: "/placeholder.svg",
    price: 293000,
    beds: 3,
    baths: 2,
    sqft: 1360,
    address: "6841 Cherry Log Pl",
    city: "Austell",
    state: "GA",
  },
  {
    id: "4",
    image: "/placeholder.svg",
    price: 392000,
    beds: 4,
    baths: 2.5,
    sqft: 2440,
    address: "1307 Hudson Ct",
    city: "Bethlehem",
    state: "GA",
  },
];

const PropertyListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMapView, setIsMapView] = useState(false); // State to toggle view

  const areas = [
    { name: "Atlanta", coordinates: { lat: 33.749, lng: -84.388 } },
    { name: "Marietta", coordinates: { lat: 33.9526, lng: -84.5499 } },
    { name: "Decatur", coordinates: { lat: 33.7748, lng: -84.2963 } },
  ];

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
    if (isMapView && map.current) {
      map.current.resize(); // Recalculate map size when switching to map view
    }
  }, [isMapView]);

  return (
    <div className="min-h-screen bg-background">
      <div className="px-5 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          <h1 className="text-2xl font-bold mb-4 lg:mb-0">
            Homes for sale in Atlanta
            <span className="block text-sm text-muted-foreground mt-1">
              442 listings found .
            </span>
          </h1>
          <div className="flex gap-4 w-full lg:w-auto">
            <Input
              type="text"
              placeholder="Search by location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full lg:w-64"
            />
            <Button variant="outline" className="w-full lg:w-auto">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            className={`order-1 lg:order-1 h-[calc(100vh-2rem)] sticky top-4 md:col-span-2 ${
              isMapView ? "block" : "hidden"
            } lg:block`}
          >
            <div ref={mapContainer} className="w-full h-full" />
          </div>
          <div
            className={`order-2 lg:order-2 md:col-span-1 ${
              isMapView ? "hidden" : "block"
            } lg:block`}
          >
            <div className="grid grid-cols-1 gap-6">
              {SAMPLE_PROPERTIES.map((property) => (
                <PropertyListingCard key={property.id} {...property} />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2">
          <Button variant="secondary" onClick={() => setIsMapView(!isMapView)}>
            {isMapView ? (
              <>
                <List className="mr-2 h-4 w-4" />
                Show Listings
              </>
            ) : (
              <>
                <Map className="mr-2 h-4 w-4" />
                Show Map
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
