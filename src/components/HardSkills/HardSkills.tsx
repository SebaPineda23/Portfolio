import React, { useState } from 'react';
import '../HardSkills/HardSkillsStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faReact,faBootstrap } from '@fortawesome/free-brands-svg-icons';
import NombreSeccion from '../NombreSeccion/NombreSeccion';

const HardSkills = () => {
  const opciones: string[] = ['Front End', 'Back End', 'Tools'];
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<number>(0);

  const seleccionarOpcion = (index: number) => {
    setOpcionSeleccionada(index);
  };

  return (
    <div className="container-hardSkills">
      <div className="section-hardSkills">
        <NombreSeccion numero='3.' nombre='Hard Skills'/>
        <div className="section-infoPersonal2">
          <div className="columna-izquierda2">
            <div className="list-options">
              <ul>
                {opciones.map((opcion, index) => (
                  <li
                    key={index}
                    className={index === opcionSeleccionada ? 'selected' : ''}
                    onClick={() => seleccionarOpcion(index)}
                  >
                    {opcion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="columna-derecha2">
            {opcionSeleccionada !== null && (
              <div className='box' >
                {/* Contenido específico para cada opción */}
                {opciones[opcionSeleccionada] === 'Front End' && (
                  <div>
                    <h4>Front End</h4>
                    <p>El desarrolo web front-end es una elección profesional que implica trabajar en el desarrollo de la interfaz de usuario y la experiencia del usuario en una aplicación web o móvil. Aquí dejo las tecnolgías con las que he trabajado.</p>
                    <div className='section-logos'>
                    <FontAwesomeIcon className='icon' icon={faHtml5} style={{color: "#eb6a00",}} />
                    <FontAwesomeIcon className='icon' icon={faCss3Alt} style={{color: "#006cd1",}} />
                    <FontAwesomeIcon className='icon' icon={faSquareJs} style={{color: "#eeff00",}} />
                    <FontAwesomeIcon className='icon' icon={faReact} style={{color: "#00fbff",}} />
                    <FontAwesomeIcon className='icon' icon={faBootstrap} style={{color: "#b300ad",}} />
                    </div>
                  </div>
                )}
                {opciones[opcionSeleccionada] === 'Back End' && (
                  <div>
                    <h4>Back End</h4>
                    <p>Un desarrollador backend se especializa en el desarrollo del lado del servidor de las aplicaciones web y de software. A diferencia de los desarrolladores front-end, los desarrolladores backend trabajan en la lógica de la aplicación, el procesamiento de datos y la gestión de servidores.</p>
                    <div className='section-logos'>
                    <img src="src/assets/java.png" alt="Java" style={{width: "60px", height:"60px"}}/>
                    <img src="src/assets/spring-boot.webp" alt="Spring boot" />
                    <img src="src/assets/MySql.com.png" alt="MySQL" style={{width: "60px", height:"60px"}}/>
                    <img src="src/assets/postgreSQL(1).png" alt="PostgreSQL" style={{width: "60px", height:"60px"}}/>
                    </div>
                  </div>
                )}
                {opciones[opcionSeleccionada] === 'Tools' && (
                  <div>
                    <h4>Tools</h4>
                    <p>Son herramientas o programas que facilitan el desarrollo, la depuración, la optimización y la gestión de aplicaciones web. Estas son fundamentales para mejorar la productividad de los desarrolladores y garantizar la calidad y eficiencia de las aplicaciones web.</p>
                    <div className='section-logos'>
                    <img src="src/assets/git (2).png" alt="" style={{width: "60px", height:"60px"}}/>
                    <img className='npm' src="src/assets/1200px-Npm-logo.svg.png" alt="npm" />
                    <img className='vite' src="src/assets/logo-with-shadow.png" alt="Vite" />
                    <img className='JWT' src="src/assets/JWT.png" alt="JWT" style={{width: "50px", height:"50px"}}/>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default HardSkills;
