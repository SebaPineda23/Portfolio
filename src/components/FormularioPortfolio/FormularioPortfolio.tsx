import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import '../FormularioPortfolio/FormularioPortfolioStyles.css'

const FormularioPortfolio: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_kx74te9', 'template_u8kfftd', form.current, 'gUKt43WgWDOgiBttN')
        .then((result) => {
          console.log(result.text);
          if (form.current) {
            form.current.reset();
          }
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div>
      <form className='columna-der-dejaTuMensaje' ref={form} onSubmit={sendEmail}>
        <input className='email' type="email" name="user_email" placeholder='Tu Email...'/>
        <textarea name="message" placeholder='Deje su mensaje...'/>
        <input className='submit' type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default FormularioPortfolio;
