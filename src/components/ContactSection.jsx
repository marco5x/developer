import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export const ContactSection = () => {
  const [state, handleSubmit] = useForm("xnqrwbkn");
  return (
    <div id="post-2" className="max-w-lg w-full text-center mx-auto pt-24 pb-8">
      <h1 className="text-2xl sm:text-4xl font-semibold">
        ¿Te intereso mi trabajo?
      </h1>
      <h2 className="text-2xl sm:text-4xl font-semibold mb-2 mt-2">
        Contactame!!
      </h2>
      <form className="flex flex-col justify-center mt-10 p-4" onSubmit={handleSubmit}>
        <input className="shadow-2xl rounded-md p-2 my-4" id="email" type="email" name="email" placeholder="ejemplo@mail.com" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea className="shadow-2xl rounded-md p-2 my-4" id="message" name="message" placeholder="Hola, me interesa contactarte..." />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button className="btn-primary" type="submit" disabled={state.submitting}>
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};
