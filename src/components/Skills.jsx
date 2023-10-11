import React from 'react';
import './Skills.css';



const Skills = () => {
  const cardsData = [
    { id: 1, imageUrl: 'react.png' },
    { id: 2, imageUrl: 'vue.png' },
    { id: 3, imageUrl: 'flutter.png' },
    { id: 4, imageUrl: 'html.png' },
    { id: 5, imageUrl: 'css-3.png' },
    { id: 6, imageUrl: 'bootstrap.png' },
    { id: 7, imageUrl: 'ai.png' },
    { id: 8, imageUrl: 'ps.png' },
    { id: 9, imageUrl: 'xd.png' },
    { id: 10, imageUrl: 'figma.png' },
  ];

  return (
    <div className="card-grid">
      <div className="card-set">
        {cardsData.slice(0, 5).map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={`Card ${card.id}`} />
          </div>
        ))}
      </div>
      <div className="card-set">
        {cardsData.slice(5, 10).map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={`Card ${card.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
