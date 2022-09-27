import React from "react";
import {BrowserRouter,Route, Routes } from "react-router-dom";
import Cadastrousuario from "./pages/cadastroUsuario";
import Cadastrolotacao from "./pages/cadastroLotacao";
import Editarusuario from "./pages/editarUsuario";
import ListaUsuarios from "./pages/listaUsuarios";
import Dashboard from "./pages/dashboard";
import Logon from "./pages/logon";

export default function Rotas(){
    return(
<BrowserRouter>
        <Routes>
             <Route path="/"  element={<Logon/>} />
             <Route path="/listausuarios" element={<ListaUsuarios/>} />
             <Route path="/cadastrousuario" element={<Cadastrousuario/>} />
             <Route path="/cadastrolotacao" element={<Cadastrolotacao/>} />
             <Route path="/editarusuario/:id" element={<Editarusuario/>} />
             <Route path="/dashboard" element={<Dashboard />} />
       </Routes>
</BrowserRouter>
    )
}