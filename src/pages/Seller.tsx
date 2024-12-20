import { useState } from "react";
import { Building2, MapPin, Ruler, BedDouble, Bath, DollarSign, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Seller = () => {
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
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">List Your Property</h1>
          <p className="text-xl mb-8">Get an instant AI-powered valuation and connect with thousands of verified agents</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-2">Instant Valuation</h3>
              <p>Get an AI-powered estimate in 60 seconds</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-2">Verified Agents</h3>
              <p>Connect with our network of 20,000+ agents</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-2">Privacy Protected</h3>
              <p>All communications managed through our platform</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
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
      </div>
    </div>
  );
};

export default Seller;