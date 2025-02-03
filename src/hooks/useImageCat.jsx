import { useEffect, useState } from 'react';
import { getImagesCat } from '../services/queryCats';

// CUSTOM HOOKS
export function useImageCat({ fact  }) {
  // ESTADOS
  const [imageURL, setImageURL] = useState(null);
  const [errorImage, setError] = useState(null);
  const [isErrorImage, setIsError] = useState(false);
  const [firstWord, setFirstWord] = useState(null);

  // Función para obtener la imagen
  const handleGetImageCat = async (FIRST_WORD) => {
    const { image, error} = await getImagesCat(FIRST_WORD);
    console.log({ image, error }); // Verifica la respuesta de la API
    
    if (error) {
      setIsError(true);
      setError(error);
    } else {
      setIsError(false);
      setImageURL(image);
    }
  };

  // Para pedir las imagenes referente a la primer palabra.
  useEffect(() => {
    if (!fact) return;
    const FIRST_WORD = fact.split(' ')[0]; //PRIMER PALABRA DE ORACIÓN
    handleGetImageCat(FIRST_WORD);
    setFirstWord(FIRST_WORD);
    console.log(imageURL);
  }, [fact]);

  return { imageURL, errorImage, isErrorImage, firstWord };
}