import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Componentes
import BodyContainerLandingPage from './components/BodyContainer/BodyContainerLandingPage';
import NavBar from './components/NavBar/NavBar';
import SectionMascotas from "./components/SectionMascotas/SectionMascotas";
import PerfilMascota from "./components/SectionMascotas/PerfilMascota/PerfilMascota";
import ContratoMascota from "./components/SectionMascotas/ContratoMascota/ContratoMascota";
import FormularioAdopcion from "./components/FormularioAdopcion/FomularioAdopcion";
import Noticia from "./components/Noticia/Noticia";
import LogIn from "./components/LogIn/LogIn";

import NavBarAdmin from "./components/Admin/NavBarAdmin/NavBarAdmin";
import BodyContainerAdmin from './components/Admin/BodyContainerAdmin';
import PostsAdmin from './components/Admin/Posts/PostsAdmin';
import BookingsAdmin from './components/Admin/Bookings/BookingsAdmin';
import NewsAdmin from './components/Admin/News/NewsAdmin';

function App() {
  
  const isAdminRoute = (path) => path.startsWith('/Admin');

  return (
    <div>
      <BrowserRouter>
        {!isAdminRoute(window.location.pathname) && <NavBar />}
        <Routes>
          <Route path='/' element={<BodyContainerLandingPage />} />
          <Route path='/noticia/:id' element={<Noticia />} />
          <Route path='/Mascotas' element={<SectionMascotas />} />
          <Route path='/SobreNosotros' element={<BodyContainerLandingPage />} />
          <Route path='/Contactanos' element={<BodyContainerLandingPage />} />
          <Route path='/perfil/:nombre' element={<PerfilMascota />} />
          <Route path='/perfil/:nombre/contrato' element={<ContratoMascota />} />
          <Route path='/FormularioAdopcion' element={<FormularioAdopcion />} />
          <Route path='/LogIn' element={<LogIn />} />

          <Route path='/Admin/*' element={<AdminRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Componente para las rutas del área de administración
const AdminRoutes = () => (
  <>
    <NavBarAdmin />

    <Routes>
      <Route path='' element={<BodyContainerAdmin />} />
      <Route path='/Posts' element={<PostsAdmin />} />
      <Route path='/Bookings' element={<BookingsAdmin />} />
      <Route path='/News' element={<NewsAdmin />} />
    </Routes>
  </>
);

export default App;
