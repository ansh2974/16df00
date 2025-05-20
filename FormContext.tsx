import React, { createContext, useContext, useState } from 'react';
import { FormNode } from '../types/types';

interface FormContextType {
  forms: FormNode[];
  setForms: React.Dispatch<React.SetStateAction<FormNode[]>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [forms, setForms] = useState<FormNode[]>([]);

  return <FormContext.Provider value={{ forms, setForms }}>{children}</FormContext.Provider>;
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
