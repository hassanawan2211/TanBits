import React, { useState, useEffect } from 'react';

const ColorOptions = ({ handleColorChange }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const defaultColors = ['#816DFA', '#000000', '#B88E2F'];
  const [colors, setColors] = useState(defaultColors);

  useEffect(() => {
    setSelectedColor(defaultColors[0]);
  }, []);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    handleColorChange(color);
  };

  return (
    <div className="">
      {colors.map((color, index) => (
        <radio 
          key={color}
          className="border border-black px-3 rounded-full mr-2"
          style={{ backgroundColor: color }}
          onClick={() => handleColorClick(color)}
        >
          
        </radio >
      ))}
    </div>
  );
};

export default ColorOptions;
