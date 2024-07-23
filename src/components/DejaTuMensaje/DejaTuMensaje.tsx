import '../DejaTuMensaje/DejaTuMensajeStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import NombreSeccion from '../NombreSeccion/NombreSeccion';
import FormularioPortfolio from '../FormularioPortfolio/FormularioPortfolio';

const DejaTuMensaje = () => {
    
  return (
    <div className='container-dejaTuMensaje'>
        <div className="section-dejaTuMensaje">
          <NombreSeccion numero='5.' nombre='Deja tu mensaje !'/>
        <div className='container-columnas'>
        <div className='columna-izq-dejaTuMensaje'>
            <p>¡Gracias por tu tiempo! Si quieres comunicarte conmigo aqui te dejo un formulario, solo debes introducir tu email, el mensaje en cuestión y clickear en donde dice Enviar.</p>
            <a href="http://" target="_blank" rel="noopener noreferrer">sebapinedadev@gmail.com</a>
            <div className='container-iconos'>
                <div className='btn-dejaTuMensaje'>
          <a href="https://www.linkedin.com/in/sebastian-pineda-a9a848294/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon-dejaTuMensaje' icon={faLinkedinIn} style={{color: "#989898",}} /></a>
            </div>
            <div className='btn-dejaTuMensaje'>
          <a href="https://github.com/SebaPineda23" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon-dejaTuMensaje' icon={faGithub} style={{color: "#989898",}} /></a>
          </div>
          <div className='btn-dejaTuMensaje'>
          <a href="https://www.instagram.com/sebaa_pineda/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon-dejaTuMensaje' icon={faInstagram} style={{color: "#989898",}} /></a>
          </div>
            </div>
        </div>
        <div className='columna-der-dejaTuMensaje'>
          <FormularioPortfolio/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default DejaTuMensaje
