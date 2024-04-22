import React, { useState, useEffect } from "react";
import "./SectionMascotas.css";
import CardMascota from "./CardMascota/CardMascota";
import RequisitosParaAdoptar from "../LandingPageSection5/LandingPageSection5";

function SectionMascotas() {
  const [opcionSeleccionadaGenero, setOpcionSeleccionadaGenero] = useState("");
  const [opcionSeleccionadaRaza, setOpcionSeleccionadaRaza] = useState("");
  const [opcionSeleccionadaEdad, setOpcionSeleccionadaEdad] = useState("");
  const [opcionSeleccionadaTamaño, setOpcionSeleccionadaTamaño] = useState("");
  const [opcionSeleccionadaTemperamento, setOpcionSeleccionadaTemperamento] = useState("");
  const [inputBusqueda, setInputBusqueda] = useState("");

  const [mascotasFiltradas, setMascotasFiltradas] = useState([]);

  const handleSeleccion = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "genero":
        setOpcionSeleccionadaGenero(value);
        break;
      case "raza":
        setOpcionSeleccionadaRaza(value);
        break;
      case "edad":
        setOpcionSeleccionadaEdad(value);
        break;
      case "tamaño":
        setOpcionSeleccionadaTamaño(value);
        break;
      case "temperamento":
        setOpcionSeleccionadaTemperamento(value);
        break;
      default:
        break;
    }
  };

  const filtrarMascotas = (mascota) => {
    if (
      (inputBusqueda === "" || mascota.nombre.toLowerCase().includes(inputBusqueda.toLowerCase())) &&
      (opcionSeleccionadaGenero === "" ||
        mascota.genero === opcionSeleccionadaGenero) &&
      (opcionSeleccionadaRaza === "" || mascota.raza === opcionSeleccionadaRaza) &&
      (opcionSeleccionadaEdad === "" || mascota.edad === opcionSeleccionadaEdad) &&
      (opcionSeleccionadaTamaño === "" ||
        mascota.tamaño === opcionSeleccionadaTamaño) &&
      (opcionSeleccionadaTemperamento === "" ||
        mascota.temperamento === opcionSeleccionadaTemperamento)
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const mascotasFiltradas = arrayMascotas.filter(filtrarMascotas);
    
    let mascotasDivididas = [];
    let arrayBloque = [];
    
    for (let i = 0; i < mascotasFiltradas.length; i++) {
      arrayBloque.push(mascotasFiltradas[i]);
      if (arrayBloque.length === 5 || i === mascotasFiltradas.length - 1) {
        mascotasDivididas.push(arrayBloque);
        arrayBloque = [];
      }
    }
    setMascotasFiltradas(mascotasDivididas);
  }, [
    opcionSeleccionadaGenero,
    opcionSeleccionadaRaza,
    opcionSeleccionadaEdad,
    opcionSeleccionadaTamaño,
    opcionSeleccionadaTemperamento,
    inputBusqueda 
  ]);
  const handleInputChange = (event) => {
    setInputBusqueda(event.target.value);
  };

  let arrayMascotas = [
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

    
  ];

  return (
  <div>


    <div id="SectionMascotasContainer">
      <div id="SectionMascotasInputContainer">
        <img id="SectionMascotasInputImage" src="./Assets/lupa.png" alt="" />
        <input 
          id="SectionMascotasInput" 
          placeholder="Buscar" 
          type="text" 
          value={inputBusqueda} 
          onChange={handleInputChange} 
        />
      </div>
      <div id="MascotasContainer">
        <div id="SectionMascotasFiltrosContainer">
          <div id="SectionMascotasFiltercontainer">
            <div id="SectionMascotasFiltercontainerUp">
              <h1 className="Dog">Perros</h1>
              <h1 className="Cat">Gatos</h1>
            </div>
            <div id="SectionMascotasFiltercontainerDown">
              <div className="SectionMascotasFilter">
                <select
                  name="genero"
                  className="SectionMascotasFilterSelect"
                  value={opcionSeleccionadaGenero}
                  onChange={handleSeleccion}
                >
                  <option value="">
                    Genero
                  </option>
                  <option value="Macho">Macho</option>
                  <option value="Hembra">Hembra</option>
                </select>
              </div>
              <div className="SectionMascotasFilter">
                <select
                  name="edad"
                  className="SectionMascotasFilterSelect"
                  value={opcionSeleccionadaEdad}
                  onChange={handleSeleccion}
                >
                  <option value="">
                    Edad
                  </option>
                  <option value="Cachorro">Cachorro</option>
                  <option value="Joven">Joven</option>
                  <option value="Adulto">Adulto</option>
                  <option value="Anciano">Anciano</option>
                </select>
              </div>
              <div className="SectionMascotasFilter">
                <select
                  name="raza"
                  className="SectionMascotasFilterSelect"
                  value={opcionSeleccionadaRaza}
                  onChange={handleSeleccion}
                >
                  <option value="" disabled hidden>
                    Raza
                  </option>
                  <option value="opcion1">Opción 1</option>
                  <option value="opcion2">Opción 2</option>
                  <option value="opcion3">Opción 3</option>
                  <option value="opcion4">Opción 4</option>
                </select>
              </div>
              <div className="SectionMascotasFilter">
                <select
                  name="tamaño"
                  className="SectionMascotasFilterSelect"
                  value={opcionSeleccionadaTamaño}
                  onChange={handleSeleccion}
                >
                  <option value="" disabled hidden>
                    Tamaño
                  </option>
                  <option className="SectionMascotasFilterOption" value="">
                    Tamaño
                  </option>
                  <option className="SectionMascotasFilterOption" value="Pequeño">
                    Pequeño
                  </option>
                  <option value="Mediano">Mediano</option>
                  <option value="Grande">Grande</option>
                  <option value="Muy grande">Muy grande</option>
                </select>
              </div>
              <div className="SectionMascotasFilter">
                <select
                  name="temperamento"
                  className="SectionMascotasFilterSelect"
                  value={opcionSeleccionadaTemperamento}
                  onChange={handleSeleccion}
                >
                  <option value="">
                    Temperamento
                  </option>
                  <option value="Docil">Docil</option>
                  <option value="Protector">Protector</option>
                  <option value="Fiel">Fiel</option>
                  <option value="Jugueton">Jugueton</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div id="SectionMascotasCardsContainer">
          {mascotasFiltradas.map((subArray, index) => (
            <React.Fragment key={index}>
              {subArray.map((mascota, subIndex) => (
                <CardMascota
                  key={`${index}-${subIndex}`}
                  nombre={mascota.nombre}
                  temperamento={mascota.temperamento}
                />
              ))}
            </React.Fragment>
          ))}
        </div>

        
      </div>

     
    </div>

    <RequisitosParaAdoptar/>


    </div>

  );
}

export default SectionMascotas;




