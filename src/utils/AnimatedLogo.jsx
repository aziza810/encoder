import { useState } from 'react';
import animatedLogo from '../assets/ala-too.png'; // Путь к вашей картинке

const AnimatedLogo = () => {
  const [pulsating, setPulsating] = useState(true);

  const logoStyle = {
    width: '100px',
    height: '100px',
    backgroundImage: `url(${animatedLogo})`,
    backgroundSize: 'cover',
    marginBottom: '20px',
    animation: pulsating ? 'pulse 1s infinite' : 'none',
  };

  const togglePulsating = () => {
    setPulsating(!pulsating);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={logoStyle} onClick={togglePulsating}></div>
      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedLogo;
