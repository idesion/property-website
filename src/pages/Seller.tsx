import SearchPanel from "@/components/SearchPanel";
import Map from "@/components/Map";
import SellerHero from "@/components/seller/SellerHero";
import SellerHowItWorks from "@/components/seller/SellerHowItWorks";
import SellerReview from "@/components/seller/SellerReview";
import SellerFAQ from "@/components/seller/SellerFAQ";
import Footer from "@/components/Footer";

const Seller = () => {
  const areas = [
    { name: "Bukit Bintang", coordinates: { lat: 3.1466, lng: 101.6958 } },
    { name: "KLCC", coordinates: { lat: 3.1579, lng: 101.7123 } },
    { name: "Mont Kiara", coordinates: { lat: 3.1686, lng: 101.6509 } },
  ];

  const sellerReviews = [
    {
      name: "John Smith",
      role: "Property Owner",
      content: "Sold my house in just 2 weeks! The process was seamless.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Home Seller",
      content: "Great experience with the valuation and listing process.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Real Estate Investor",
      content: "Professional service and excellent communication throughout.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SellerHero />
      <SearchPanel />
      <Map areas={areas} />
      <SellerHowItWorks />
      <SellerReview reviews={sellerReviews} />
      <SellerFAQ />
      <Footer />
    </div>
  );
};

export default Seller;