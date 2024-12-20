import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: "For Sale" | "For Rent" | "New Launch";
}

const PropertyCard = ({
  image,
  title,
  price,
  location,
  beds,
  baths,
  sqft,
  type,
}: PropertyCardProps) => {
  return (
    <div className="property-card animate-fade-up">
      <div className="relative">
        <img src={image} alt={title} className="property-image" />
        <Badge className="absolute top-2 right-2 bg-accent text-white">
          {type}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-2xl font-bold text-primary mb-2">{price}</p>
        <div className="flex items-center text-secondary mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex justify-between text-secondary">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span className="text-sm">{beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span className="text-sm">{baths} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span className="text-sm">{sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;