import React, { useState } from 'react';
import MyContext from './MyContext';


// Define el tipo de datos para los productos
type Product = {
  id: number;
  step: number;
  name: string;
  price: number;
};

// Define el tipo de datos para el proveedor de contexto
type MyProviderProps = {
  children: React.ReactNode;
};

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [products] = useState<Product[]>([
    { id:1, step:1, name: 'Mouse', price: 60 },
    { id:2, step:1, name: 'Monitor', price: 70 },
    { id:4, step:2, name: 'Keyboard', price: 80 },
    { id:5, step:2, name: 'Headset', price: 90 },
    { id:6, step:3, name: 'Tablet', price: 100 },
    { id:7, step:3, name: 'Hub', price: 110 }
  ]);

  const [step, setStep] = useState<number>(1); // Estado para el paso actual

  // Funciones para manejar los botones "Prev" y "Next"
  const handlePrev = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  return (
    <MyContext.Provider value={{ products, step }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
