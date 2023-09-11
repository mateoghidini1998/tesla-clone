import { useState, useEffect } from 'react';

// Function to calculate text color based on background contrast
function calculateTextColor(backgroundColor) {
  // Convert the background color to an RGB value
  const rgb = parseInt(backgroundColor.slice(1), 16);

  // Calculate the brightness using the relative luminance formula
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;
  const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Determine the text color based on brightness
  return brightness > 0.5 ? 'black' : 'white';
}

// Custom hook to calculate text color based on background contrast
function useTextColorFromBackground(backgroundSelector) {
  const [textColor, setTextColor] = useState('black'); // Default to black text

  useEffect(() => {
    const backgroundElement = document.querySelector(backgroundSelector);

    if (backgroundElement) {
      const backgroundColor = getComputedStyle(backgroundElement).backgroundColor;
      const calculatedTextColor = calculateTextColor(backgroundColor);
      setTextColor(calculatedTextColor);
    }
  }, [backgroundSelector]);

  return textColor;
}

export default useTextColorFromBackground;
