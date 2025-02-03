import { useEffect, useState } from 'react';
import { getImagesCat } from '../services/facts';
import { DATA_API } from '../constants';

// CUSTOM HOOKS
export function useImageCat({ fact  }) {
  const { API_CATS_IMAGES } = DATA_API; //DESESTRUCTURAMOS OBJETO
  // ESTADOS
  const [imageURL, setImageURL] = useState(null);
  const [errorImage, setError] = useState(null);
  const [isErrorImage, setIsError] = useState(false);
  const [firstWord, setFirstWord] = useState(null);

  // Función para obtener la imagen
  const handleGetImageCat = async (url) => {
    const { image, error} = await getImagesCat(url);
    if (error) {
      setIsError(true);
      setError(error);
    } else {
      setImageURL(image);
    }
  };

  // Para pedir las imagenes referente a la primer palabra.
  useEffect(() => {
    if (!fact) return;
    const FIRST_WORD = fact.split(' ')[0]; //PRIMER PALABRA DE ORACIÓN
    const IMAGE_CAT_URL = `${API_CATS_IMAGES}/cat/says/${FIRST_WORD ?? 'hello'}?fontSize=50&fontColor=red`;
    setFirstWord(FIRST_WORD);
    handleGetImageCat(IMAGE_CAT_URL);
  }, [fact]);

  return { imageURL, errorImage, isErrorImage, firstWord };
}