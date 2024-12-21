import TenantHero from "@/components/tenant/TenantHero";
import TenantHowItWorks from "@/components/tenant/TenantHowItWorks";
import TenantFAQ from "@/components/tenant/TenantFAQ";
import TenantReviews from "@/components/tenant/TenantReviews";
import Map from "@/components/Map";
import SearchPanel from "@/components/SearchPanel";
import Footer from "@/components/Footer";

const Tenant = () => {
  const areas = [
    { name: "Bukit Bintang", coordinates: { lat: 3.1466, lng: 101.6958 } },
    { name: "KLCC", coordinates: { lat: 3.1579, lng: 101.7123 } },
    { name: "Mont Kiara", coordinates: { lat: 3.1686, lng: 101.6509 } },
  ];

  const reviews = [
    {
      name: "John Doe",
      role: "Tenant",
      content:
        "The platform made finding a rental property so easy and stress-free.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      role: "Tenant",
      content:
        "I appreciated the verified listings and the detailed property information.",
      rating: 4,
    },
    {
      name: "Alice Brown",
      role: "Tenant",
      content:
        "Great experience! The customer support was very helpful throughout the process.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TenantHero />
      <SearchPanel />
      <Map areas={areas} />
      <TenantHowItWorks />
      <TenantReviews reviews={reviews} />
      <TenantFAQ />
      <Footer />
    </div>
  );
};

export default Tenant;