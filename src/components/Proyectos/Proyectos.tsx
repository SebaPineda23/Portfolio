import '../Proyectos/ProyectosStyles.css'
import NombreSeccion from '../NombreSeccion/NombreSeccion'

const Proyectos = () => {
  return (
    <div className='container-proyecto'>
        <div className="section-proyecto">
        <NombreSeccion numero={'4.'} nombre={'Proyectos'}/>
        <div className='section-cards-proyecto'>
            <div className='cards-proyecto'>
                <img src="src/assets/ControlDeCuotas.png" alt="Proyecto Control de Cuotas" />
                <h4>Control de Cuotas</h4>
                <p>El proyecto tiene como fin administrar las altas, bajas, modificaciones y actualización de los socios de un club, al cual se les actualiza un estado en base a si el socio realizó el pago mensual de su cuota. Además cuenta con varios filtros y la generación de archivos Excel y PDF sobre la liquidación Mensual. Las tecnologías implementadas para el back-end son Java 17 con Springboot, se uso PostgreSQL para la base de datos y se realizó el deploy de la aplicación por Render.</p>
                <div className='buttons-proyecto'>
                <button><a href="http://" target="_blank" rel="noopener noreferrer">Web</a></button>
                <button><a href="https://github.com/SebaPineda23/ControlDeCuotas" target="_blank" rel="noopener noreferrer">Code</a></button>
                </div>
            </div>
            <div className='cards-proyecto'>
            <img src="src/assets/ActiveStyle.png" alt="Proyecto e-commerce" />
                <h4>ActiveStyle</h4>
                <p>El proyecto trata de replicar las funcionalidades basicas de un e-commerce. Este cuenta con un sistema de Registro/Login, ademas de un panel de administrador, para poder realizar operaciones CRUD de los productos. Además cuenta con un carrito de compras por usuario. Las tecnologías implementadas para el back-end son Java 17 con Sprinboot, JWT, cloudinary, se uso PostgreSQL para la base de datos y se realizó el deploy de la aplicación por Render.</p>
                <div className='buttons-proyecto'>
                <button><a href="https://activestyle.vercel.app/" target="_blank" rel="noopener noreferrer">Web</a></button>
                <button><a href="https://github.com/SebaPineda23/ActiveStyle" target="_blank" rel="noopener noreferrer">Code</a></button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Proyectos
