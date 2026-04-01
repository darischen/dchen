import React from 'react';
import '../App.css';

const TabNavigation = ({
  tabs,
  activeTab,
  onTabChange
}) => {
  // tabs should be array of objects: { id, label, accent }
  // accent is one of: 'ml', 'hw', 'web'

  const getAccentClass = (accent) => {
    if (accent === 'ml') return 'accent-ml';
    if (accent === 'hw') return 'accent-hw';
    if (accent === 'web') return 'accent-web';
    return '';
  };

  return (
    <div className="tab-navigation">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${getAccentClass(tab.accent)} ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
