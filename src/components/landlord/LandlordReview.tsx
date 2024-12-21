import React from "react";
import { Star } from "lucide-react";

interface Review {
  rating: number;
  content: string;
  name: string;
  role: string;
}

interface LandlordReviewProps {
  reviews: Review[];
}

/**
 * LandlordReview component to display landlord reviews.
 * @param {LandlordReviewProps} props - The props for the component.
 * @returns {JSX.Element} The LandlordReview component.
 */
const LandlordReview: React.FC<LandlordReviewProps> = ({ reviews }) => {
  return (
    <div className="bg-secondary/20 py-20 px-4 -mx-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 capitalize">
          What Our Landlords Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join thousands of satisfied landlords
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-gray-600 mb-4">{review.content}</p>
            <div>
              <p className="font-semibold">{review.name}</p>
              <p className="text-gray-500 text-sm">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandlordReview;
