import React from 'react';

const Stats = ({ stats }) => {

  const loadStats = stats.map((stat) => {
    return (
      <div className="item stat">
        <div className="left aligned content stat-name">
          {stat.stat.name}
        </div>
        <div className="middle aligned content stat-detail">
          {stat.base_stat}
        </div>
      </div>
    );
  });


  return (
    <div>
      <div className="stat-title">
        Stats
      </div>
      <div className="ui divided items stat-items">
        {loadStats}
      </div>
    </div>
    
  );
};

export default Stats;