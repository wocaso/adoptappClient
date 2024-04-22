import React from 'react';
import { useParams, Link } from 'react-router-dom'; 
import "./PerfilMascota.css";

function PerfilMascota() {
  const { nombre } = useParams(); 
  
  let arrayMascotas = [
    {
      nombre: "Gaston",
      temperamento: "Jugueton",
      raza: "Mestizo",
      tamaño: "Mediano",
      genero: "Macho",
      edad: "Adulto",
      color:"Rubio",
    },
    {
      nombre: "Lala",
      temperamento: "Fiel",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Macho",
      edad: "Adulto",
    },
    {
      nombre: "Roco",
      temperamento: "Docil",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      nombre: "Gaston",
      temperamento: "Jugueton",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      nombre: "Lala",
      temperamento: "Fiel",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      nombre: "Roco",
      temperamento: "Docil",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      nombre: "Gaston",
      temperamento: "Jugueton",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      nombre: "Lala",
      temperamento: "Fiel",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      nombre: "Roco",
      temperamento: "Docil",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      nombre: "Gaston",
      temperamento: "Jugueton",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      nombre: "Lala",
      temperamento: "Protector",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      nombre: "Roco",
      temperamento: "Docil",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      nombre: "Gaston",
      temperamento: "Jugueton",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      nombre: "Lala",
      temperamento: "Protector",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      nombre: "Roco",
      temperamento: "Docil",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      nombre: "Gaston",
      temperamento: "Jugueton",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      nombre: "Lala",
      temperamento: "Protector",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      nombre: "Roco",
      temperamento: "Docil",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
  ];

  let arrayPerfil = arrayMascotas.filter(mascota => mascota.nombre === nombre);

  const mascota = arrayPerfil[0];
 

  return (
    <section id='PerfilMascotaContainer'>
      <div id="PerfilMascota">
        <img id='MascotaImage' src="../Assets/PerroGolden.png" alt="" />
        <div id="MascotaInfo">
          <h1 id="MascotaName">{mascota.nombre} <span>8 años</span></h1>
          <ul id="MascotaInfoList">
            <li><p>Temperamento</p><p>{mascota.temperamento}</p></li>
            <li><p>Raza</p><p>{mascota.raza}</p></li>
            <li><p>Tamaño</p><p>{mascota.tamaño}</p></li>
            <li><p>Género</p><p>{mascota.genero}</p></li>
            <li><p>Edad</p><p>{mascota.edad}</p></li>
            <li><p>Color</p><p>{mascota.color}</p></li>
          </ul>
          <p id="MascotaDescripcion">La más serena, la que mejor se porta, la que te da cero problemas pero te llena de amor y paz, esa soy yo, Tengo 8 años, me porto divino, te espero pacientemente para escuchar tu día y aliviarte de todos los problemas, me llevo bien con todos, ¿me adoptás? Estoy castrada, vacunada y desparasitada</p>
          <Link to={`/perfil/${nombre}/contrato`}>
            <span id="BotonAdoptar">Quiero Adoptar <span className="corazon">	&#x2764;	</span> </span>
          </Link>
        </div>


      </div>

    </section>
  );
}

export default PerfilMascota;
