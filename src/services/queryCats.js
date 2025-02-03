import { DATA_API } from '../constants';

const { API_URL_CAT_RANDOM, API_CATS_IMAGES } = DATA_API; //DESESTRUCTURAMOS OBJETO

// PETICION TEXTOS ALEATORIOS
export const getRandomFact = async () => {
  try {
    const queryCats = await fetch(API_URL_CAT_RANDOM);
    if (!queryCats.ok) {
      throw {
        status: queryCats.status,
        statusText: queryCats.statusText,
      };
    }
    const jsonQuery = await queryCats.json();
    return { fact: jsonQuery.fact, error:null }; 
  } catch (error) {
    let message = `Error ${error.status ?? 500}: ${
      error.statusText ?? 'Ocurrió un error inesperado'
    }`;
    return { fact: null, error: message };
  }
};

// PETICION PARA OBTENER LA IMAGENES
export const getImagesCat = async (FIRST_WORD) => {
  const IMAGE_CAT_URL = `${API_CATS_IMAGES}/cat/says/${FIRST_WORD}?fontSize=50&fontColor=red`;
  try {
    const queryCatsImage = await fetch(IMAGE_CAT_URL);
    if (!queryCatsImage.ok) {
      throw {
        status: queryCatsImage.status,
        statusText: queryCatsImage.statusText,
      };
    }
    const blobQuery = await queryCatsImage.blob();
    console.log(blobQuery);
    return { image: URL.createObjectURL(blobQuery), error:null }; 
  } catch (error) {
    let message = `Error ${error.status ?? 500}: ${error.statusText || 'Ocurrió un error inesperado'}`;
    return { image: null, error: message}; 
  }
};
