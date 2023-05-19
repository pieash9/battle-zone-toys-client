/* eslint-disable react/prop-types */

import { FaRegStar, FaStar,  } from "react-icons/fa";
import Rating from "react-rating";

const CardShopByCategory = ({ category }) => {
  const { pictureURL, name, price, rating } = category || {};
 
  return (
    <div className="p-2 bg-gray-100 border border-gray-200 rounded">
      <div className="max-w-xs rounded overflow-hidden shadow-xl  ">
        <img src={pictureURL} alt={name} className="w-full h-64 " />

        <div className="px-6 py-4">
          <div className="font-bold text-gray-700 text-xl mb-2">{name}</div>
          <p className="text-gray-600 text-base">${price}</p>

          <div className="flex items-center mt-2 gap-2">
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar className="h-5 w-5 text-yellow-400" />}
              placeholderSymbol={<FaStar className="h-5 w-5 text-yellow-400" />}
              fullSymbol={<FaStar className="h-5 w-5 text-yellow-400" />}
              readonly
            />
            <p className="text-lg text-gray-600 font-medium font-montserrat">
              {rating}
            </p>
          </div>

          <button className="button-primary mt-3">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CardShopByCategory;
