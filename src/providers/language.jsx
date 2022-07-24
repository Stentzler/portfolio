import { createContext, useState } from 'react';

export const LanguageContext = createContext(true);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(true);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
