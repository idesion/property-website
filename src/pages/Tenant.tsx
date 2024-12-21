import TenantHero from "@/components/TenantHero";
import TenantHowItWorks from "@/components/TenantHowItWorks";
import SearchFilters from "@/components/SearchFilters";
import PropertyCard from "@/components/PropertyCard";

const Tenant = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TenantHero />
      <div className="container mx-auto py-5 px-4 pt-10">
        <div className="mb-8">
          <SearchFilters />
        </div>
      </div>
      <TenantHowItWorks />
    </div>
  );
};

export default Tenant;