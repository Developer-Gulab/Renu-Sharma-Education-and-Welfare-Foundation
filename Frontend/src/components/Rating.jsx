import React, { useState, useEffect } from 'react';
import './Rating.css';
import UIF1 from '../assets/UIF1.jpeg';
import SMB2 from '../assets/SMB2.jpeg';
import AF1 from '../assets/AF1.jpeg';

const slides = [
  {
    title: 'Huffy',
    capital: '$3.5M+',
    description:
      'Crafted for your comfort, to enhance the beauty of your present lifestyle but also paves the way for a more aesthetically pleasing and harmonious future for both you and your cherished family.',
    intro: 'A vision for liveable, sustainable & affordable.',
    buttonText: 'Start Exploring',
    image: UIF1,
  },
  {
    title: 'Visionary Homes',
    capital: '$4M+',
    description:
      'We bring forward a new era of elegant living spaces that combine modern designs with sustainable construction practices.',
    intro: 'A vision for a greener, more harmonious future.',
    buttonText: 'Discover More',
    image: SMB2,
  },
  {
    title: 'Future Dwellings',
    capital: '$5M+',
    description:
      'Pioneering innovative homes that blend technology with comfort to redefine the living experience for families around the world.',
    intro: 'A vision for futuristic and smart homes.',
    buttonText: 'Join Us Today',
    image: AF1,
  },
];

const Rating = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [imageKey, setImageKey] = useState(0);
  const [textKey, setTextKey] = useState(0);
  const [direction, setDirection] = useState('forward');

  // Change image every 2 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setDirection('forward');
      setCurrentImage((prev) => (prev + 1) % slides.length);
      setImageKey((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(imageInterval);
  }, []);

  // Change text every 10 seconds
  useEffect(() => {
    const textInterval = setInterval(() => {
      setDirection('forward');
      setCurrentText((prev) => (prev + 1) % slides.length);
      setTextKey((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="bg-[#001f3f] text-white p-8 rounded-lg">
      <style>
        {`
          .fade-left-img {
            animation: fadeLeftImage 2s ease forwards;
          }
          .fade-right-img {
            animation: fadeRightImage 2s ease forwards;
          }

          .fade-left-text {
            animation: fadeLeftText 10s ease forwards;
          }
          .fade-right-text {
            animation: fadeRightText 10s ease forwards;
          }

          .sweep-gloss {
            position: relative;
            overflow: hidden;
          }
          .sweep-gloss::before {
            content: '';
            position: absolute;
            top: 0;
            left: -75%;
            width: 50%;
            height: 100%;
            background: linear-gradient(
              120deg,
              rgba(255, 255, 255, 0.1) 0%,
              rgba(255, 255, 255, 0.6) 50%,
              rgba(255, 255, 255, 0.1) 100%
            );
            transform: skewX(-25deg);
            animation: sweep 2s ease-out forwards;
            pointer-events: none;
          }

          @keyframes sweep {
            to {
              left: 125%;
            }
          }

          @keyframes fadeLeftImage {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeRightImage {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeLeftText {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeRightText {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">We craft the future dwelling.</h1>
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-6 mt-8">
        {/* Image Section */}
        <div
          key={`img-${imageKey}`}
          className={`w-full md:w-1/2 sweep-gloss ${
            direction === 'forward' ? 'fade-left-img' : 'fade-right-img'
          }`}
        >
          <img
            src={slides[currentImage].image}
            alt="Building"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div
          key={`text-${textKey}`}
          className={`w-full md:w-1/2 bg-gray-800 p-6 rounded-lg ${
            direction === 'forward' ? 'fade-right-text' : 'fade-left-text'
          }`}
        >
          <div className="text-lg font-bold mb-1">Capital raised</div>
          <div className="text-2xl font-bold mb-3">{slides[currentText].capital}</div>
          <p className="mb-4">{slides[currentText].description}</p>
          <h2 className="text-lg font-bold mt-6">Introduction</h2>
          <p className="mt-2 text-sm">{slides[currentText].intro}</p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded">
            {slides[currentText].buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rating;
