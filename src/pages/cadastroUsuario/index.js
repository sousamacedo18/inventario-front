import React,{useState} from 'react';
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";

export default function Cadastrousuario(){
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [confimar,setConfirmar] = useState("");

    function salvardados(e){
        e.preventDefault();
        alert("Dados Salvos com Sucesso!");
    }
 return(
<div className="dashboard-container">
    <Menu />
    <div className="principal">
            <Head title="Cadastro de Usuários" />
            <section className="form-cadastro">
                <form onSubmit={salvardados} >
                    <label>Nome</label>
                    <input placeholder="Nome"
                    value={nome}
                    onChange={e=>setNome(e.target.value)}
                    />
                    <label>E-mail</label>
                    <input placeholder="e-mail@email.com"
                     type="email"
                     value={email}
                     onChange={e=>setEmail(e.target.value)}                     
                    />
                    <label>Senha</label>
                    <input 
                    type="password"
                    value={senha}
                    onChange={e=>setSenha(e.target.value)}
                    />
                    <label>Confirmar Senha</label>
                    <input 
                    type="password"
                    value={confimar}
                    onChange={e=>setConfirmar(e.target.value)}                    
                    />
                    <button className="button_save"  type="submit">
                        Salvar
                    </button>
                    <h1>{nome}</h1>
                    <h1>{email}</h1>
                    <h1>{senha}</h1>
                    <h1>{confimar}</h1>
    
                </form>
            </section>
    </div>
</div>

 )   
}
