import { useState } from "react";

export const ModalMeme = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="m-auto">
        <button
          className="btn-primary"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Ver proyecto
        </button>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-2 sm:m-0"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">MemeGenerator</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Esta es una web app en la que el usuario puede crear un
                    meme, a través de unas imagenes iconicas de memes y luego
                    guardarlo. El proyecto esta creado con ReactJs,
                    react-router-dom y Bootstrap para los estilos
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="btn-secondary"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  <a
                    className="btn-primary"
                    target="_blank"
                    rel="noreferrer"
                    href="https://marco5x.github.io/meme-generator"
                    onClick={() => setShowModal(false)}
                  >
                    Ir a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
