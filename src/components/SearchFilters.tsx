import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchFilters = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="relative">
        <Input type="text" placeholder="Enter location..." className="pl-10" />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-secondary" />
      </div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="house">House</SelectItem>
          <SelectItem value="apartment">Apartment</SelectItem>
          <SelectItem value="condo">Condo</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Price Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0-500k">$0 - $500k</SelectItem>
          <SelectItem value="500k-1m">$500k - $1M</SelectItem>
          <SelectItem value="1m+">$1M+</SelectItem>
        </SelectContent>
      </Select>
      <Button
        className="w-full bg-primary hover:bg-primary-dark text-white"
        onClick={() => (window.location.href = "/listing")}
      >
        Search Properties
      </Button>
    </div>
  );
};

export default SearchFilters;
