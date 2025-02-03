/* eslint-disable react/prop-types */

export function ModalError({ error, isError,  isErrorImage, errorImage }) {
  const classNameError = `${!isError && !isErrorImage ? 'modal modal-hide' : 'modal'}`;
  return (
    <>
      <section className={classNameError}>
        <h2>{error || errorImage}</h2>
      </section>
    </>
  );
}
