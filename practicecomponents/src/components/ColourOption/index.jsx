import React, { useState } from 'react';

const ColorOptions = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = ['red', 'blue', 'green'];

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="">
      {colors.map((color) => (
        <label key={color} className="color-option">
          <input
            type="radio"
            name="color"
            value={color}
            checked={selectedColor === color}
            onChange={() => handleColorChange(color)}
          />
          <span className={`color-indicator ${color}`} />
        </label>
      ))}
      {/* <p>Selected Color: {selectedColor}</p> */}
    </div>
  );
};

export default ColorOptions;
