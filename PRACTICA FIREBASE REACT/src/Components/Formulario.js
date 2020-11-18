import '../App.css';

const Formulario = (props) => {
    return ( 
        <div className="Form">
        <form onSubmit={props.enviar}>
        <div>
          <label htmlFor="ID_ROPA">ID_ROPA</label>
          <input
            type="text"
            placeholder="Escribe"
            onChange={props.guardarCambios}
            value={props.ropa.ID_ROPA}
            name="ID_ROPA"
            disabled={props.desactivado}
          />
        </div>
        <div>
          <label htmlFor="Marca">Marca</label>
          <input
            type="text"
            placeholder="Escribe"
            onChange={props.guardarCambios}
            value={props.ropa.Marca}
            name="Marca"
          />
        </div>
        <div>
          <label htmlFor="Tipo_De_Ropa">Tipo_De_Ropa</label>
          <input
            type="text"
            placeholder="Escribe"
            onChange={props.guardarCambios}
            value={props.ropa.Tipo_De_Ropa}
            name="Tipo_De_Ropa"
          />
        </div>
        <div>
          <label htmlFor="Talla">Talla</label>
          <select name="Talla" value={props.ropa.Talla} onChange={props.guardarCambios}>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="L">L</option>
            <option value="M">M</option>
          </select>
        </div>
        <button>Enviar</button>
        </form>
      </div>
    );
}
 
export default Formulario;