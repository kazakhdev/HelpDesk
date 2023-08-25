import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SelectedRegionContextType {
  selectedRegion: string;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
}

const SelectedRegionContext = createContext<SelectedRegionContextType | undefined>(undefined);

export const useSelectedRegion = () => {
  const context = useContext(SelectedRegionContext);
  if (!context) {
    throw new Error('useSelectedRegion must be used within a SelectedRegionProvider');
  }
  return context;
};

interface SelectedRegionProviderProps {
  children: ReactNode;
}

export const SelectedRegionProvider: React.FC<SelectedRegionProviderProps> = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState('');

  return (
    <SelectedRegionContext.Provider value={{ selectedRegion, setSelectedRegion }}>
      {children}
    </SelectedRegionContext.Provider>
  );
};
export default SelectedRegionContext;