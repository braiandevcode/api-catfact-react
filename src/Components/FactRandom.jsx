import { ModalError } from './ModalError';
import { useImageCat } from '../hooks/useImageCat.jsx';
import { useCatFact } from '../hooks/useCatFact.jsx';

export function FactRandom() {
  const { fact, error, isError, refreshFact} = useCatFact(); //cuando no lleva parametros es que no tiene dependencias
  const { imageURL, isErrorImage, errorImage, firstWord } = useImageCat({ fact }); //USO DEL CUSTOM HOOK

  // Función para obtener y establecer un hecho aleatorio
  const handleClickRandomFact =async ()=>{
    await refreshFact();
  };

  //RENDER
  return (
    <>
      <h1>Peticiones API de gatos con React</h1>
      <button type="button" id='changeImageButton' onClick={handleClickRandomFact}>
        Obtener info de Gatos.
      </button>
      { isError && <ModalError
        error={error}
        isError={isError}
        isErrorImage={isErrorImage}
        errorImage={errorImage}
      />}
      {fact && <p>{fact}</p>}
      {imageURL && (
        <img
          src={imageURL}
          alt={`Imagen de la primer palabra "${firstWord}"`}
        />
      )}
    </>
  );
}
