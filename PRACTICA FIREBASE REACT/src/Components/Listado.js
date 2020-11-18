import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = (props) => {
    return ( 
        <div className="List">
        {
                    
            props.lista.length===0   
            ? <p>No hay Ropa</p>
            : 
        
             <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID_ROPA</th>
                <th>Marca</th>
                <th>Tipo_De_Ropa</th>
                <th>Talla</th>
                <th></th>
                <th></th> 
              </tr>
            </thead>
              <tbody>
            {
              props.lista.map((a,index)=>
                <tr key={index}>
                    <td>{a.ID_ROPA}</td>
                    <td>{a.Marca}</td>
                    <td>{a.Tipo_De_Ropa}</td>
                    <td>{a.Talla}</td>
                    <td><Button onClick={()=>props.eliminar(a.ID_ROPA)} variant="danger">Eliminar</Button></td>
                    <td><Button onClick={()=>props.modificar(a.ID_ROPA)}variant="success">Modificar</Button></td>
                </tr>
              )
            }
              </tbody>
            </Table>
          }

          </div>
     );
}
 
export default Listado;