import { useState } from "react";
import { MapPin, Heart, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PropertyListingCard from "@/components/PropertyListingCard";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const PropertyDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = "pk.eyJ1IjoiaWRlc2lvbiIsImEiOiJjbHBtcmRodnAwYXIyMmlwZ296dnlwaGcxIn0.ad8RnHG4ygclJ_5QtixS6A";

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-84.5499, 33.9526], // Coordinates for Fairburn, GA
      zoom: 13,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => {
      map.current?.remove();
    };
  }, []);

  const similarListings = [
    {
      id: "1",
      image: "/placeholder.svg",
      price: 484120,
      beds: 5,
      baths: 4,
      sqft: 3231,
      address: "123 Main St",
      city: "Atlanta",
      state: "GA",
    },
    {
      id: "2",
      image: "/placeholder.svg",
      price: 421400,
      beds: 4,
      baths: 3,
      sqft: 2404,
      address: "456 Oak Ave",
      city: "Atlanta",
      state: "GA",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hero Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="/lovable-uploads/74f9109c-50ea-4ce4-91d9-824231358b80.png"
              alt="Property"
              className="w-full h-full object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/80 hover:bg-white"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {/* Property Information */}
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">607 Stream Ct</h1>
                <p className="text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Fairburn, GA 30213
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary">$455,700</p>
                <p className="text-sm text-muted-foreground">$2,395/month est.</p>
              </div>
            </div>
            <div className="flex gap-6 mt-4">
              <div className="flex items-center gap-1">
                <Bed className="h-5 w-5 text-muted-foreground" />
                <span>5 beds</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-5 w-5 text-muted-foreground" />
                <span>4 ba</span>
              </div>
              <div className="flex items-center gap-1">
                <Square className="h-5 w-5 text-muted-foreground" />
                <span>3562 sqft</span>
              </div>
            </div>
          </div>

          {/* Home Details */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Home details</h2>
            <p className="text-muted-foreground">
              {isExpanded ? (
                "Welcome to your dream property, where modern elegance meets comfort. The living room features a cozy fireplace and fresh interior paint in a neutral color scheme. The primary bedroom boasts a walk-in closet and ensuite bathroom. The kitchen comes with granite countertops and stainless steel appliances. The backyard offers a perfect space for outdoor entertainment."
              ) : (
                "Welcome to your dream property, where modern elegance meets comfort. The living room features a cozy fireplace and fresh interior paint in a neutral color scheme. The primary bedroom boasts a walk-in closet and..."
              )}
            </p>
            <Button
              variant="ghost"
              className="mt-2"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read less" : "Read more"}
            </Button>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-muted-foreground">Home type</p>
                <p>Single family</p>
              </div>
              <div>
                <p className="text-muted-foreground">Lot size</p>
                <p>8,263 sqft</p>
              </div>
              <div>
                <p className="text-muted-foreground">Built in</p>
                <p>2016</p>
              </div>
              <div>
                <p className="text-muted-foreground">Garage</p>
                <p>2 car garage</p>
              </div>
            </div>
          </Card>

          {/* Map */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <div ref={mapContainer} className="h-[300px] rounded-lg" />
          </Card>
        </div>

        {/* Right Column - Similar Listings */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Similar listings</h2>
          <div className="space-y-4">
            {similarListings.map((property) => (
              <PropertyListingCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;