import React, { useRef, useState, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../FormularioPortfolio/FormularioPortfolioStyles.css'

const FormularioPortfolio: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number>(0);

  useEffect(() => {
    let timer: number | null = null;

    if (isSubmitting && countdown > 0) {
      // Actualiza el contador cada segundo
      timer = window.setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown <= 1) {
            setIsSubmitting(false);
            setNotification(null); 
            window.clearInterval(timer as number);
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer !== null) window.clearInterval(timer);
    };
  }, [isSubmitting, countdown]);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      setIsSubmitting(true);
      setCountdown(30 * 60); // 30 minutos en segundos

      emailjs.sendForm('service_kx74te9', 'template_u8kfftd', form.current, 'gUKt43WgWDOgiBttN')
        .then((result) => {
          console.log(result.text);
          setNotification("¡Mensaje enviado con éxito!");
          if (form.current) {
            form.current.reset();
          }
        }, (error) => {
          console.log(error.text);
          setNotification("Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.");
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div>
      {notification && <p className="notification" style={{marginLeft:'5%'}}>{notification}</p>}
      {isSubmitting && countdown > 0 && (
        <p className="countdown"style={{marginLeft:'5%'}}>Tiempo restante para enviar otro mensaje: {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, '0')}</p>
      )}

      <form 
        className='columna-der-dejaTuMensaje' 
        ref={form} 
        onSubmit={sendEmail}
      >
        <input 
          className='email' 
          type="email" 
          name="user_email" 
          placeholder='Tu Email...'
          disabled={isSubmitting}
        />
        <textarea 
          name="message" 
          placeholder='Deje su mensaje...'
          disabled={isSubmitting}
        />
        <input 
          className='submit' 
          type="submit" 
          value="Enviar" 
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default FormularioPortfolio;
