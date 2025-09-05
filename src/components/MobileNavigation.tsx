import React from 'react';

interface MobileNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = ['home', 'search', 'favorites', 'profile'];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex justify-around py-2">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`flex-1 text-center py-2 ${
            activeTab === tab ? 'text-blue-600 font-bold' : 'text-gray-600'
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default MobileNavigation;
