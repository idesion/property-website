import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

interface PropertyListingCardProps {
  id: string;
  image: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  city: string;
  state: string;
}

const PropertyListingCard = ({
  id,
  image,
  price,
  beds,
  baths,
  sqft,
  address,
  city,
  state,
}: PropertyListingCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/properties/${id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="relative">
        <img
          src={image}
          alt={address}
          className="w-full h-48 object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation when clicking the heart
            // Add favorite logic here
          }}
        >
          <Heart className="h-5 w-5" />
        </Button>
        <Badge className="absolute top-2 left-2 bg-primary text-white">
          Self-Tour
        </Badge>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-foreground">
            ${price.toLocaleString()}
          </h3>
        </div>
        <div className="flex gap-4 text-muted-foreground mb-2">
          <span>{beds}bd</span>
          <span>{baths}ba</span>
          <span>{sqft.toLocaleString()} ft²</span>
        </div>
        <p className="text-foreground">{address}</p>
        <p className="text-muted-foreground">
          {city}, {state}
        </p>
      </div>
    </div>
  );
};

export default PropertyListingCard;