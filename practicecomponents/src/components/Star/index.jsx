import React, { useState } from 'react';

const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="">
      <div>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setRating(num)}
            onMouseOver={() => setHover(num)}
            onMouseLeave={() => setHover(0)}
          >
            <span
              className=   {`star ${
                hover >= num || rating >= num ? 'on' : 'off'
              }` }
            >
              &#9733;
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Star;
