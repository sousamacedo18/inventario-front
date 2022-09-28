import {FiUser, FiTruck} from "react-icons/fi"

export default function Menu(){
    return(
        <div className="menu">
            <p>Menu</p>
            <a href="/listausuarios"><FiUser/>Usuários</a>
            <a href="/listaempresas"><FiTruck/>Empresas</a>
            <a href="/listapatrimonios"><FiTruck/>Patrimônios</a>
            <a href="/listasetores"><FiTruck/>Setores</a>
            <a href="/listalotacao"><FiTruck/>Lotações</a>
        </div>
    )
}