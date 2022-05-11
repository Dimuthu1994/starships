import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Rating = ({ starShipRating }) => {
  const [rating, setRating] = useState(starShipRating);
  const [hover, setHover] = useState(starShipRating);
  return (
    <div className="flex">
      {[...Array(5)].map((star, i) => {
        const ratingValue = 1 + i;
        return (
          <label>
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={15}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(ratingValue)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
// import { useState } from "react";
// import Star from "./Star";

// function Rating({ onChange }) {
//   const [rating, setRating] = useState(0);

//   const changeRating = (newRating) => {
//     setRating(newRating);
//     onChange?.(newRating);
//   };

//   return (
//     <span>
//       {[1, 2, 3, 4, 5].map((value) => (
//         <Star
//           key={value}
//           filled={value <= rating}
//           onClick={() => changeRating(value)}
//         />
//       ))}
//     </span>
//   );
// }
// export default Rating;
