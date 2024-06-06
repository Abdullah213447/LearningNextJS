'use client';

import React, { useState } from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  const [hover, setHover] = useState(false);

  const CardStyle: React.CSSProperties = {
    width: '300px',
    height: '300px',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.2s, box-shadow 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const CardHoverStyle: React.CSSProperties = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div
      style={{
        ...CardStyle,
        ...(hover ? CardHoverStyle : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </div>
  );
};

export default Card;
