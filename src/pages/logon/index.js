import React from "react";
import logo from "../../assets/imagens/logo.webp"
import './styles.css';

export default function Logon(){
 return(
<div className="logon-container">
    <section className="form">
        <form>
            <h1>Faça o seu login</h1>
            <input placeholder="Email" />
            <input placeholder="senha" type="password"/>
            <button className="button_login" type="submit">
                Entrar
            </button>
        </form>
    </section>
    <section className="div-imagem">
    <img src={logo} width={150} />
    <h1>Sistema de Invetário</h1>
    </section>
</div>

 )   
}