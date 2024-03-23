import { useEffect, useState } from 'react'
import './App.css'
import Stepper from './quiz02/Stepper'
import Content from './quiz02/Content'


function App(){
    const [step, setStep]= useState(1);
    const [showAllProducts, setShowAllProducts] = useState(false);
  
    const [products] = useState<Product[]>([
      { id:1, step:1, name: 'Mouse', price: 60 },
      { id:2, step:1, name: 'Monitor', price: 70 },
      { id:4, step:2, name: 'Keyboard', price: 80 },
      { id:5, step:2, name: 'Headset', price: 90 },
      { id:6, step:3, name: 'Tablet', price: 100 },
      { id:7, step:3, name: 'Hub', price: 110 }
    ]);
    
    const prevStep = () => {
      if (step > 1){
        setStep(step -1);
      }
      else { 
        setShowAllProducts(true);
      }
      
      if (step === 3) {
        setShowAllProducts(false); 
      }
     
    };
  
    const nextStep = () => {
  
      if (step < 3) {
        setStep(step + 1);
      } else {
        setShowAllProducts(true);
      }
      if (step == 1){
        setShowAllProducts(false);
      }
    };
  
    const filteredProducts = showAllProducts ? products : products.filter(product => product.step === step);
  

  return (
    <>
      <h1>Quiz 02</h1>
      <Stepper step={step}/>
       <Content/>
      <div className='flex'>
      <button type="button" onClick={prevStep}>Prev</button>
        <button type="button" onClick={nextStep}>Next</button>
      </div>
    </>
  )
}

export default App