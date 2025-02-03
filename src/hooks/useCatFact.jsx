import { useEffect, useState } from 'react';
import { getRandomFact } from '../services/facts';

export function useCatFact() {
  // ESTADOS
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [fact, setFact] = useState(null);
  
  const refreshFact = async ()=>{
    const { fact, error } = await getRandomFact();
    if (error) {
      setIsError(true);
      setError(error);
    } else {
      setFact(fact);
    }
  };

  // Para pedir los datos random de los textos.
  useEffect(()=>refreshFact, []);

  return { fact, error, isError, refreshFact }; 
}
