import '../NombreSeccion/NombreSeccionStyles.css'
interface NombreSeccionProps {
    numero: string;
    nombre: string;
  }
const NombreSeccion : React.FC<NombreSeccionProps> = (props) => {
  return (
    <div>
        <div className='titulo-section'>
                <h3><span>{props.numero} </span>{props.nombre}</h3>
                <hr></hr>
            </div>
    </div>
  )
}

export default NombreSeccion
