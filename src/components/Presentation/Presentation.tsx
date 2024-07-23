import miFoto from '../../assets/WhatsApp Image 2023-10-10 at 6.28.40 PM.jpeg';
import miCV from '../../assets/Currículum Vitae-Sebastian Pineda.pdf'
import './PresentacionStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

interface Componente1Props {
  scrollToSobreMi: () => void;
}
const Presentation: React.FC<Componente1Props> = ({ scrollToSobreMi }) => {

  const handleDownload = () => {
    // Reemplaza la URL con la ruta de tu archivo PDF
    const pdfURL = miCV;

    // Abre una nueva ventana o pestaña para la descarga del PDF
    window.open(pdfURL, '_blank');
  };
  return (
    <div className='container'>
      <div className='presentation-container'>
        <p>const NAME =</p>
        <h1>Sebastian Pineda</h1>
        <div className='rubro'>
        <h2><span>&lt;</span>DesarrolladorWeb<span>/&gt;</span></h2>
        </div>
        <div className='buttons-presentacion'>
          <button onClick={scrollToSobreMi}>Sobre Mí</button>
          <button onClick={handleDownload} className='btn-cv'>Descargar CV</button>
        </div>
      </div>
      <div className='perfil-container'>
        <div className='icons-perfil'>
          <a href="https://www.instagram.com/sebaa_pineda/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon-ig' icon={faInstagram} style={{color: "#989898",}} /></a>
          <a href="https://www.linkedin.com/in/sebastian-pineda-a9a848294/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon-linkedin' icon={faLinkedinIn} style={{color: "#989898",}} /></a>
          <a href="https://github.com/SebaPineda23" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon-github' icon={faGithub} style={{color: "#989898",}} /></a>
        </div>
          <img src={miFoto} alt="" />
      </div>
    </div>
  )
}

export default Presentation
