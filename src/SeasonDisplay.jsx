import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: `let's hit the beach!`,
    iconName: 'sun'
  },
  winter: {
    text: `Burr, it's chilly!`,
    iconName: `snowflake`
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? `summer` : `winter`;
  } else {
    return lat < 0 ? `summer` : `winter`;
  }
};
export default function SeasonDisplay({ lat }) {
  // const monthes = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon`}></i>
    </div>
  );
}
