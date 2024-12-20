import { useState } from "react";
import { Building2, MapPin, Ruler, BedDouble, Bath, DollarSign, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const PropertyDetailsForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    propertyType: "",
    location: "",
    squareFeet: "",
    bedrooms: "",
    bathrooms: "",
    price: "",
    yearBuilt: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Valuation Request Received",
      description: "We'll analyze your property details and send you an estimate shortly.",
    });
  };

  return (
    <div className="max-w-2xl mx-auto form-container">
      <h2 className="text-2xl font-bold mb-6">Property Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Property Type</label>
            <div className="input-group">
              <Building2 className="input-icon" size={20} />
              <Input
                placeholder="e.g., Apartment, House, Villa"
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                className="rounded-xl"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <div className="input-group">
              <MapPin className="input-icon" size={20} />
              <Input
                placeholder="Enter address"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="rounded-xl"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Square Feet</label>
            <div className="input-group">
              <Ruler className="input-icon" size={20} />
              <Input
                type="number"
                placeholder="Total area"
                value={formData.squareFeet}
                onChange={(e) => setFormData({ ...formData, squareFeet: e.target.value })}
                className="rounded-xl"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Price</label>
            <div className="input-group">
              <DollarSign className="input-icon" size={20} />
              <Input
                type="number"
                placeholder="Expected price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="rounded-xl"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Bedrooms</label>
            <div className="input-group">
              <BedDouble className="input-icon" size={20} />
              <Input
                type="number"
                placeholder="Number of bedrooms"
                value={formData.bedrooms}
                onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                className="rounded-xl"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Bathrooms</label>
            <div className="input-group">
              <Bath className="input-icon" size={20} />
              <Input
                type="number"
                placeholder="Number of bathrooms"
                value={formData.bathrooms}
                onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                className="rounded-xl"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Year Built</label>
            <div className="input-group">
              <Calendar className="input-icon" size={20} />
              <Input
                type="number"
                placeholder="Construction year"
                value={formData.yearBuilt}
                onChange={(e) => setFormData({ ...formData, yearBuilt: e.target.value })}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary-dark text-white rounded-xl py-6"
        >
          Get Instant Valuation
        </Button>
      </form>
    </div>
  );
};

export default PropertyDetailsForm;