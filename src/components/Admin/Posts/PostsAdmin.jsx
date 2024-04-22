import React from "react";
import "./PostsAdmin.css";




function PostsAdmin() {
  let arrayMascotas = [
    {
      id: 1,
      nombre: "Gaston",
      edad: "Adulto",
      tamaño: "Pequeño",
      temperamento: "Jugueton",
      genero: "Hembra",
      estado: "Reservado",
    },
    {
      id: 2,
      nombre: "Tina",
      edad: "Adulto",
      tamaño: "Pequeño",
      temperamento: "Tranquilo",
      genero: "Hembra",
      estado: "En adopción",
    },
    {
      id: 3,
      nombre: "Gaston",
      edad: "Adulto",
      tamaño: "Grande",
      temperamento: "Tranquilo",
      genero: "Macho",
      estado: "Reservado",
    },
    {
      id: 4,
      nombre: "Pepe",
      edad: "Adulto",
      tamaño: "Mediano",
      temperamento: "Jugueton",
      genero: "Macho",
      estado: "En adopción",
    },
  ];
  return (
    <div id="BodyContainerAdmin">
      <div className="BodyContainerSection">
        <h1>Publicaciones</h1>
        <table id="TableAdmin">
          <thead id="header">
            <th>Id</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Tamaño</th>
            <th>Temperamento</th>
            <th>Género</th>
            <th>Estado</th>
          </thead>
          <tbody>
            {arrayMascotas.map(mascota => (
              <tr key={mascota.id}>
                <td>{mascota.id}</td>
                <td className="Name">
                  {mascota.nombre}
                  <span className="Functions">
                    <a href="#" className="Delete">Eliminar</a>
                    <span className="FunctionsLine"></span>
                    <a href="#" className="Edit">Editar</a>
                  </span>

                </td>
                <td>{mascota.edad}</td>
                <td>{mascota.tamaño}</td>
                <td>{mascota.temperamento}</td>
                <td>{mascota.genero}</td>
                <td>{mascota.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PostsAdmin;
