import { createContext, useContext, useState } from 'react';

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [legs, setLegs] = useState(0);
  const [top, setTop] = useState('Antique');
  const [legsColor, setLegsColor] = useState('#555555');
  const [tableWidth, setTableWidth] = useState(120);
  return (
    <ConfiguratorContext.Provider value={{ legs, setLegs, legsColor, setLegsColor, tableWidth, setTableWidth, top, setTop }}>
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
