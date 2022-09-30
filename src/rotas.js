import React from "react";
import {BrowserRouter,Route, Routes } from "react-router-dom";
import Cadastrousuario from "./pages/cadastroUsuario";
import Cadastrolotacao from "./pages/cadastroLotacao";
import Cadastroempresa from "./pages/cadastroEmpresa";
import Cadastrosetor from "./pages/cadastroSetor";
import Cadastropatrimonio from "./pages/cadastroPatrimonio";
import Editarusuario from "./pages/editarUsuario";
import Editarlotacao from "./pages/editarLotacao";
import ListaUsuarios from "./pages/listaUsuarios";
import ListaPatrimonios from "./pages/listaPatrimonios";
import Listaempresas from "./pages/listaEmpresa";
import Listalotacao from "./pages/listaLotacao";
import Dashboard from "./pages/dashboard";
import Logon from "./pages/logon";


export default function Rotas(){
    return(
<BrowserRouter>
        <Routes>
             <Route path="/"  element={<Logon/>} />
             <Route path="/listausuarios" element={<ListaUsuarios/>} />
             <Route path="/listaempresas" element={<Listaempresas/>} />
             <Route path="/listapatrimonios" element={<ListaPatrimonios/>} />
             <Route path="/listalotacao" element={<Listalotacao/>} />
             <Route path="/cadastrousuario" element={<Cadastrousuario/>} />
             <Route path="/cadastrolotacao" element={<Cadastrolotacao/>} />
             <Route path="/cadastrosetor" element={<Cadastrosetor/>} />
             <Route path="/cadastropatrimonio" element={<Cadastropatrimonio/>} />
             <Route path="/cadastroempresa" element={<Cadastroempresa/>} />
             <Route path="/editarusuario/:id" element={<Editarusuario/>} />
             <Route path="/editarlotacao/:id" element={<Editarlotacao/>} />
             <Route path="/dashboard" element={<Dashboard />} />
       </Routes>
</BrowserRouter>
    )
}