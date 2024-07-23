import '../SoftSkills/SoftSkillsStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faDice, faBrain,faCompassDrafting,faLightbulb,faPersonHarassing } from '@fortawesome/free-solid-svg-icons';
import NombreSeccion from '../NombreSeccion/NombreSeccion';

const SoftSkills = () => {
  return (
    <div className="container-softSkills">
        <div className='section-softSkills'>
            <NombreSeccion numero='2.' nombre='Soft Skills'/>
            <div className='section-cards'>
                <div className='cards'>
                <FontAwesomeIcon className='icon' icon={faEye} style={{color: "#989898",}} />
                <h2>Atención al detalle</h2>
                <p>"La programación es precisa y un pequeño error puede tener grandes consecuencias. La atención al detalle es crucial para escribir código limpio y libre de errores."</p>
                </div>
                <div className='cards'>
                <FontAwesomeIcon className='icon' icon={faDice} style={{color: "#989898",}} />
                <h2>Adaptabilidad y Flexibilidad</h2>
                <p>"En el mundo de la programación, la adaptabilidad es esencial para enfrentar cambios tecnológicos y ajustarse a nuevos requisitos de manera eficaz."</p>
                </div>
                <div className='cards'>
                <FontAwesomeIcon className='icon' icon={faBrain} style={{color: "#989898",}} />
                <h2>Pensamiento Analítico</h2>
                <p>"La capacidad de analizar información, identificar patrones y entender las relaciones es crucial en el desarrollo de software."</p>
                </div>
            </div>

            <div className='section-cards'>
                <div className='cards'>
                <FontAwesomeIcon className='icon' icon={faCompassDrafting} style={{color: "#989898",}} />
                <h2>Aprendizaje continuo</h2>
                <p>"Estar abierto a la actualización constante de habilidades y conocimientos, ya que la tecnología y las mejores prácticas evolucionan rápidamente."</p>
                </div>
                <div className='cards'>
                <FontAwesomeIcon className='icon' icon={faLightbulb} style={{color: "#989898",}} />
                <h2>Creatividad</h2>
                <p>"Pensar de manera innovadora para desarrollar soluciones únicas y eficientes, contribuyendo a un código más robusto y a la resolución de problemas complejos."</p>
                </div>
                <div className='cards'>
                <FontAwesomeIcon className='icon' icon={faPersonHarassing} style={{color: "#989898",}} />
                <h2>Resiliencia</h2>
                <p>"Afrontar los desafíos y fracasos con una actitud positiva, aprendiendo de las experiencias adversas para mejorar continuamente."</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SoftSkills
