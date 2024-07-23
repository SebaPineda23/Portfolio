import '../SobreMi/SobreMiStyle.css'
import NombreSeccion from '../NombreSeccion/NombreSeccion'
import progPic from '../../assets/que-es-la-programacion-1024x683.jpg'

interface SobreMiProps {
    scrollToSoftSkills: () => void;
    scrollToHardSkills: () => void;
    scrollToProyectos: ()=> void;
  }
const SobreMi: React.FC<SobreMiProps> = ({scrollToSoftSkills, scrollToHardSkills, scrollToProyectos}) => {
  return (
    <div className='container-sobreMi'>
        <div className='section-sobreMi'>
            <NombreSeccion numero= {"1."} nombre={'Sobre mí'} />
            <div className='section-infoPersonal'>
                <div className='columna-izquierda'>
                    <div className='imagen-prog'>
                        <img src={progPic} alt="" />
                    </div>
                    <div className='buttons'>
                            <button onClick={scrollToSoftSkills}>Soft Skills</button>
                            <button onClick={scrollToHardSkills}>Hard Skills</button>
                            <button onClick={scrollToProyectos}>Proyectos</button>
                        </div>
                </div>
                <div className='columna-derecha'>
                    <h4 className='espacio-letras'>BIENVENIDO A MI PORTFOLIO</h4>
                    <p>Mi nombre es Sebastián Pineda, soy estudiante de la carrera Ingenieria en Sistemas de Información, de la UTN (Universidad Tecnológica Nacional). Hace 1 año y medio empecé a programar de manera autodidacta, enfocado al desarrollo web y he descubierto que es una de mis actividades favoritas.<br></br><br></br>
                    He trabajado en grupo en distintos proyectos para la facultad, trabajando con tecnologías como React (HTML, CSS y JS) para el Front-End y Java (con Springboot) para el Back-End.
                    <br></br><br></br>
                    Estoy en busca de mi primera oportunidad laboral en este mundo del desarrollo web para poder adquirir experiencia profesional y por sobre todo para aprender aún más sobre este mundo tan grande.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SobreMi
