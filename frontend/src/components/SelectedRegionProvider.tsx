import React, { useState } from 'react';
import SelectedRegionContext from '../context/SelectedRegionContext';

interface SelectedRegionProviderProps {
    children: React.ReactNode; // Define the type for the children prop
  }
  
  const SelectedRegionProvider: React.FC<SelectedRegionProviderProps> = ({ children }) => {
    const [selectedRegion, setSelectedRegion] = useState('');
  
    return (
      <SelectedRegionContext.Provider value={{ selectedRegion, setSelectedRegion }}>
        {children}
      </SelectedRegionContext.Provider>
    );
  };

export default SelectedRegionProvider;
