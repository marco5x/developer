import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export const ContactSection = () => {
  const [state, handleSubmit] = useForm("xnqrwbkn");
  return (
    <div id="post-2" className="max-w-lg w-full text-center mx-auto pt-24 pb-8">
      <h1 className="text-2xl sm:text-4xl font-semibold dark:text-white ">
        ¿Te intereso mi trabajo?
      </h1>
      <h2 className="text-2xl sm:text-4xl font-semibold mb-2 mt-2 dark:text-white ">
        Contáctame!!
      </h2>
      <form
        className="flex flex-col justify-center mt-10 p-4"
        onSubmit={handleSubmit}
      >
        <input
          className="shadow-2xl rounded-md p-2 my-4"
          id="email"
          type="email"
          name="email"
          placeholder="ejemplo@mail.com"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className="shadow-2xl rounded-md p-2 my-4"
          id="message"
          name="message"
          placeholder="Hola, me interesa contactarte..."
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          onClick={() => alert("Mensaje enviado correctamente")}
          className="group relative z-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br flex items-center justify-center font-medium text-white transition-all duration-200 ease-in-out rounded-lg px-4 py-2 active:scale-95 active:shadow-inner"
        >
          <div class="text-center svg-wrapper transform group-hover:translate-x-5 group-hover:rotate-45 transition-all duration-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=""
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="#fff"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
          <span class="font-bold ml-1 text-white transition-all duration-300 group-hover:text-transparent">
            ENVIAR MENSAJE
          </span>
        </button>
      </form>
    </div>
  );
};
