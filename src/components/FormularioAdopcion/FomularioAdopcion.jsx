import React from "react";
import "./FormularioAdopcion.css";
import { useFormik } from "formik";

// validaciones

const validate = values =>{
    const errors = {};
    if (!values.nombreApellido) {
        errors.nombreApellido = "Campo requerido";
      }
      if (!values.ciudad) {
        errors.ciudad = "Campo requerido";
      }
      if (!values.trabajoCargo) {
        errors.trabajoCargo = "Campo requerido";
      }
      if (!values.solvenciaEconomica) {
        errors.solvenciaEconomica = "Campo requerido";
      }
      if (!values.tipoVivienda) {
        errors.tipoVivienda = "Campo requerido";
      }
      if (!values.vivienda) {
        errors.vivienda = "Campo requerido";
      }
      if (!values.tieneMascotas) {
        errors.tieneMascotas = "Campo requerido";
      }
      if (!values.antecedentes) {
        errors.antecedentes = "Campo requerido";
      }
      if (!values.acuerdoAdopcion) {
        errors.acuerdoAdopcion = "Campo requerido";
      }
      if (!values.dondeDormira) {
        errors.dondeDormira = "Campo requerido";
      }
      if (!values.aCargo) {
        errors.aCargo = "Campo requerido";
      }
      if (!values.veterinarioConfianza) {
        errors.veterinarioConfianza = "Campo requerido";
      }
      if (!values.esterilizacion) {
        errors.esterilizacion = "Campo requerido";
      }
    return errors;
}


function FomularioAdopcion() {
  const formik = useFormik({
    initialValues: {
      nombreApellido: "",
      ciudad: "",
      trabajoCargo: "",
      solvenciaEconomica: "",
      tipoVivienda: "",
      vivienda: "",
      tieneMascotas: "",
      antecedentes: "",
      acuerdoAdopcion: "",
      dondeDormira: "",
      aCargo: "",
      veterinarioConfianza: "",
      esterilizacion: "",
    },
    validate,
    onSubmit: (values) => {
        console.log(JSON.stringify(values, null, 2));
    //   alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container-form">
      <h1>Formulario de Adopción</h1>
      <div className="FomularioAdopcion">
        <form onSubmit={formik.handleSubmit}>
          {/*=========== Espacio 1 * ============*/}
          <div className="container-lable-input">
            <div>
              <label>¿Cuál es tu nombre y apellido?</label>
            </div>
            <div>
              <input
                id="nombreApellido"
                name="nombreApellido"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nombreApellido}
              />
                {formik.errors.nombreApellido ? (
                <div className="errors">{formik.errors.nombreApellido}</div>
              ) : null}
            </div>
          </div>
          {/*=========== Espacio 2 * ============*/}
          <div className="container-lable-input">
            <div>
              <label>¿Donde vives?</label>
            </div>
            <div>
              <input
                id="ciudad"
                name="ciudad"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.ciudad}
              />
              {formik.errors.ciudad ? (
                <div className="errors">{formik.errors.ciudad}</div>
              ) : null}
            </div>
            {/*=========== Espacio 3 * ============*/}
            <div className="container-lable-input">
              <div>
                <label>¿Dónde trabajas y cuál es tu cargo?</label>
              </div>
              <div>
                <input
                  id="trabajoCargo"
                  name="trabajoCargo"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.trabajoCargo}
                />
                {formik.errors.trabajoCargo ? (
                <div className="errors">{formik.errors.trabajoCargo}</div>
              ) : null}
              </div>
            </div>
            {/*=========== Espacio 4 * ============*/}
            <div className="container-lable-input">
              <div>
                <label>
                  ¿A cuánto asciende tu solvencia económica mensualmente?
                </label>
              </div>
              <div>
                <select
                  id="solvenciaEconomica"
                  name="solvenciaEconomica"
                  onChange={formik.handleChange}
                  value={formik.values.solvenciaEconomica}
                >
                  <option value="">-- Selecciona --</option>
                  <option value="$500 - $1000 USD">$500 - $1000 USD</option>
                  <option value="$1000 - $2000 USD">$1000 - $2000 USD</option>
                  <option value="Mas de $2000 USD">Mas de $2000 USD</option>
                </select>
                {formik.errors.solvenciaEconomica? (
                <div className="errors">{formik.errors.solvenciaEconomica}</div>
              ) : null}
              </div>
            </div>
            {/*=========== Espacio 5 * ============*/}
            <div className="container-lable-input">
              <div>
                <label>
                  ¿A cuánto asciende tu solvencia económica mensualmente?
                </label>
              </div>
              <div>
                <select
                  id="tipoVivienda"
                  name="tipoVivienda"
                  onChange={formik.handleChange}
                  value={formik.values.tipoVivienda}
                >
                  <option value="">-- Selecciona --</option>
                  <option value="casa">Casa</option>
                  <option value="departamento">Departamento</option>
                </select>
                {formik.errors.tipoVivienda? (
                <div className="errors">{formik.errors.tipoVivienda}</div>
              ) : null}
              </div>
            </div>
            {/*=========== Espacio 6 * ============*/}
            <div className="container-lable-input">
              <div>
                <label>¿Es casa propia o alquilada?</label>
              </div>
              <div>
                <select
                  id="vivienda"
                  name="vivienda"
                  onChange={formik.handleChange}
                  value={formik.values.vivienda}
                >
                  <option value="">-- Selecciona --</option>
                  <option value="propia">Propia</option>
                  <option value="alquilada">alquilada</option>
                  <option value="familiar">De un familiar</option>
                </select>
                {formik.errors.vivienda? (
                <div className="errors">{formik.errors.vivienda}</div>
              ) : null}
              </div>
            </div>
            {/*=========== Espacio 7 * ============*/}
            <div className="container-lable-input">
              <div>
                <label>¿Tienes mascotas actualmente? (Especifica)</label>
              </div>
              <div>
                <input
                  id="tieneMascotas"
                  name="tieneMascotas"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.tieneMascotas}
                />
                {formik.errors.tieneMascotas? (
                <div className="errors">{formik.errors.tieneMascotas}</div>
              ) : null}
              </div>
            </div>
            {/*=========== Espacio 8 * ============*/}
            <div className="container-lable-input">
              <div>
                <label>
                  Si haz tenido mascotas con anterioridad,.. ¿Qué sucedió con
                  ella(s)?
                </label>
              </div>
              <div>
                <input
                  id="antecedentes"
                  name="antecedentes"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.antecedentes}
                />
                {formik.errors.antecedentes? (
                <div className="errors">{formik.errors.antecedentes}</div>
              ) : null}
              </div>
            </div>
            {/*=========== Espacio 9 * ============*/}
            <div className="container-lable-input">
              <div>
                <label>¿Por que te gustaría adoptar?</label>
              </div>
              <div>
                <input
                  id="adopcion"
                  name="adopcion"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.adopcion}
                />
                {formik.errors.adopcion? (
                <div className="errors">{formik.errors.adopcion}</div>
              ) : null}
              </div>
            </div>
            {/*=========== Espacio 9 * ============*/}
            <div className="container-lable-input">
              <div>
                <label>
                  ¿Si vives con más personas, todos están de acuerdo con la
                  adopción?
                </label>
              </div>
              <div>
                <input
                  id="acuerdoAdopcion"
                  name="acuerdoAdopcion"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.acuerdoAdopcion}
                />
                {formik.errors.acuerdoAdopcion? (
                <div className="errors">{formik.errors.acuerdoAdopcion}</div>
              ) : null}
              </div>
            </div>
            {/*=========== Espacio 10 * ============*/}
            <div className="container-lable-input">
              <div>
                <label>
                  ¿Dónde dormiría el animalito adoptado y dónde pasaria la mayor
                  parte del tiempo?
                </label>
              </div>
              <div>
                <input
                  id="dondeDormira"
                  name="dondeDormira"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.dondeDormira}
                />
                {formik.errors.dondeDormira? (
                <div className="errors">{formik.errors.dondeDormira}</div>
              ) : null}
              </div>
            </div>
            {/*=========== Espacio 11 * ============*/}
            <div className="container-lable-input">
              <div>
                <label>
                  ¿Quién se hará cargo de los gastos de la mascota adoptada?
                </label>
              </div>
              <div>
                <input
                  id="aCargo"
                  name="aCargo"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.aCargo}
                />
                {formik.errors.aCargo? (
                <div className="errors">{formik.errors.aCargo}</div>
              ) : null}
              </div>
            </div>
            {/*=========== Espacio 12 * ============*/}
            <div className="container-lable-input">
              <div>
                <label>¿Tienes veterinario de confianza?</label>
              </div>
              <div>
                <select
                  id="veterinarioConfianza"
                  name="veterinarioConfianza"
                  onChange={formik.handleChange}
                  value={formik.values.veterinarioConfianza}
                >
                  <option value="">-- Selecciona --</option>
                  <option value="si">Si</option>
                  <option value="no">Aun no</option>
                </select>
                {formik.errors.veterinarioConfianza? (
                <div className="errors">{formik.errors.veterinarioConfianza}</div>
              ) : null}
              </div>
            </div>
            {/*=========== Espacio 13 * ============*/}
            <div className="container-lable-input">
              <div>
                <label>
                  En caso de tratarse de una mascota de corta edad: ¿Asumes el
                  compromiso de esterilizar al adoptado una vez que tenga la
                  edad suficiente?
                </label>
              </div>
              <div>
                <select
                  id="esterilizacion"
                  name="esterilizacion"
                  onChange={formik.handleChange}
                  value={formik.values.esterilizacion}
                >
                  <option value="">-- Selecciona --</option>
                  <option value="validacionSi">Si</option>
                  <option value="validacionNo">No</option>
                </select>
                {formik.errors.esterilizacion? (
                <div className="errors">{formik.errors.esterilizacion}</div>
              ) : null}
              </div>
            </div>
            {/*=========== Espacio 14 * ============*/}
          </div>

          <div className="container-button">
            <button className="button-form" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FomularioAdopcion;
