import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Ruler, BedDouble, Bath, Info } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Seller = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    propertyType: "",
    location: "",
    squareFeet: "",
    bedrooms: "",
    bathrooms: "",
    yearBuilt: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically connect to an AI valuation service
    toast({
      title: "Valuation Request Received",
      description: "We'll analyze your property details and send you an estimate shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">List Your Property</h1>
          <p className="text-xl mb-8">Get an instant AI-powered valuation and connect with thousands of verified agents</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Instant Valuation</h3>
              <p>Get an AI-powered estimate in 60 seconds</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Verified Agents</h3>
              <p>Connect with our network of 20,000+ agents</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Privacy Protected</h3>
              <p>All communications managed through our platform</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Property Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Property Type</label>
              <Input
                icon={<Building2 className="text-gray-400" />}
                placeholder="e.g., Apartment, House, Villa"
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <Input
                icon={<MapPin className="text-gray-400" />}
                placeholder="Enter address"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Square Feet</label>
                <Input
                  icon={<Ruler className="text-gray-400" />}
                  type="number"
                  placeholder="Total area"
                  value={formData.squareFeet}
                  onChange={(e) => setFormData({ ...formData, squareFeet: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Year Built</label>
                <Input
                  icon={<Info className="text-gray-400" />}
                  type="number"
                  placeholder="Construction year"
                  value={formData.yearBuilt}
                  onChange={(e) => setFormData({ ...formData, yearBuilt: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Bedrooms</label>
                <Input
                  icon={<BedDouble className="text-gray-400" />}
                  type="number"
                  placeholder="Number of bedrooms"
                  value={formData.bedrooms}
                  onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bathrooms</label>
                <Input
                  icon={<Bath className="text-gray-400" />}
                  type="number"
                  placeholder="Number of bathrooms"
                  value={formData.bathrooms}
                  onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                />
              </div>
            </div>
            <Button type="submit" className="w-full">Get Instant Valuation</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Seller;