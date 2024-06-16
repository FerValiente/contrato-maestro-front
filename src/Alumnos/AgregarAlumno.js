import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AgregarAlumno() {
    let navegacion = useNavigate();

    const [alumno, setAlumno] = useState({
        CI: "",
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        direccion: "",
        ciudad: "",
        telefono: "",
        email: ""
    });

    const { CI, nombre, apellido, fechaNacimiento, direccion, ciudad, telefono, email } = alumno;

    const onInputChange = (e) => {
        setAlumno({ ...alumno, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "http://localhost:8080/cepb-app/alumnos";
        
        try {
            const response = await axios.post(urlBase, alumno);
            console.log('Response Data:', response.data);
            // Redirigimos a la página de inicio
            navegacion('/');
        } catch (error) {
            // Manejo detallado de errores
            if (error.response) {
                // El servidor respondió con un código de estado fuera del rango 2xx
                console.error('Error Response:', error.response);
                if (error.response.status === 500) {
                    alert('Error interno del servidor. Por favor, inténtelo de nuevo más tarde.');
                } else {
                    alert(`Error: ${error.response.statusText}`);
                }
            } else if (error.request) {
                // La solicitud fue hecha pero no hubo respuesta
                console.error('Error Request:', error.request);
                alert('No se recibió respuesta del servidor. Por favor, verifique su conexión a internet.');
            } else {
                // Ocurrió algo al configurar la solicitud
                console.error('Error Message:', error.message);
                alert(`Error al configurar la solicitud: ${error.message}`);
            }
            console.error('Config:', error.config);
        }
    };

    return (
        <div className='container'>
            <div className='container text-center' style={{ margin: "30px" }}>
                <h3>Agregar Alumno</h3>
            </div>

            <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="CI" className="form-label">Cédula de Identidad</label>
                    <input type="number" className="form-control"
                        id="CI" name='CI' required={true}
                        value={CI} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control"
                        id="nombre" name='nombre' required={true}
                        value={nombre} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido"
                        className="form-label">Apellido</label>
                    <input type="text" className="form-control"
                        id="apellido" name='apellido' required={true}
                        value={apellido} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="fecha-de-nacimiento"
                        className="form-label">Fecha de nacimiento</label>
                    <input type="date" className="form-control"
                        id="fecha-de-nacimiento" name='fechaNacimiento'
                        value={fechaNacimiento} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion"
                        className="form-label">Dirección</label>
                    <input type="text" className="form-control"
                        id="direccion" name='direccion'
                        value={direccion} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="ciudad"
                        className="form-label">Ciudad</label>
                    <input type="text" className="form-control"
                        id="ciudad" name='ciudad'
                        value={ciudad} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefono"
                        className="form-label">Teléfono</label>
                    <input type="text" className="form-control"
                        id="telefono" name='telefono'
                        value={telefono} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email"
                        className="form-label">Correo Electrónico</label>
                    <input type="text" className="form-control"
                        id="email" name='email'
                        value={email} onChange={(e) => onInputChange(e)} />
                </div>
                <div className='text-center'>
                    <button type="submit"
                        className="btn btn-warning btn-sm me-3">Agregar</button>
                    <a href='/' className='btn btn-danger btn-sm'>Regresar</a>
                </div>
            </form>
        </div>
    );
}
