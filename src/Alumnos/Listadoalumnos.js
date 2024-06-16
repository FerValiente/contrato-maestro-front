import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Listadoalumnos() {

    const urlBase = "http://localhost:8080/cepb-app/alumnos";

    const[alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        cargarAlumnos();
    }, []);

    const cargarAlumnos = async () => {
        const resultado = await axios.get(urlBase);
        console.log("Resultado cargar alumnos");
        console.log(resultado.data);
        setAlumnos(resultado.data);
    }

  return (
    <div className="container">
        <div className="container text-center" style={{margin: "30px"}}>
            <h3>Sabandijas....</h3>
        </div>

        <table className="table table-striped table-hover align-middle">
        <thead className='table-dark'>
            <tr>
            <th scope="col">CI</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Fecha de Nacimiento</th>
            <th scope="col">Direccion</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Telefono</th>
            <th scope="col">Correo</th>

            </tr>
        </thead>
        <tbody>
            {
            //Iteramos el arreglo de empleados
            alumnos.map((alumno, indice) => (
                <tr key={indice}>
                <th scope="row">{alumno.idAlumno}</th>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.fechaNacimiento}</td>
                <td>{alumno.direccion}</td>
                <td>{alumno.ciudad}</td>
                <td>{alumno.telefono}</td>
                <td>{alumno.email}</td>

                
                {/* <td><NumericFormat value={empleado.sueldo}
                    displayType={'text'}
                    thousandSeparator=',' prefix={'$'}
                    decimalScale={2} fixedDecimalScale/>
                </td> */}
            </tr>
            ))
            }
        </tbody>
        </table>

    </div>
  )
}
