import React, { createContext, useState } from 'react';

export const ToolContext = createContext();

export const ToolProvider = ({ children }) => {
  const [toolState, setToolState] = useState({});

  return (
    <ToolContext.Provider value={{ toolState, setToolState }}>
      {children}
    </ToolContext.Provider>
  );
};