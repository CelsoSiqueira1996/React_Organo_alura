import styles from "./Formulario.module.css";
import { CampoTexto } from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";
import { useState } from "react";

export function Formulario({ onRegisterCollaborator, times }) {

    const [nameValue, setNamevalue] = useState('');
    const [roleValue, setRolevalue] = useState('');
    const [imageValue, setImagevalue] = useState('');
    const [teamValue, setTeamValue] = useState('Programação');

    function handleOnSubmitForm(event) {
        event.preventDefault();
        const collaborator = {
            nome: nameValue,
            cargo:  roleValue,
            imagemUrl: imageValue,
            time: teamValue
        }

        onRegisterCollaborator(collaborator);

        setImagevalue('');
        setNamevalue('');
        setRolevalue('');
        setTeamValue('Programação');
    }

    return (
        <section className={styles.formulario}>
            <form onSubmit={handleOnSubmitForm}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    content="Nome"
                    placeholder="Digite seu nome"
                    id="name"
                    type="text"
                    obrigatorio={true}
                    value={nameValue}
                    onChangeValue={(value) => setNamevalue(value)}
                />
                <CampoTexto 
                    content="Cargo"
                    placeholder="Digite seu cargo"
                    id="role"
                    type="text"
                    obrigatorio={true}
                    value={roleValue}
                    onChangeValue={(value) => setRolevalue(value)}
                />
                <CampoTexto 
                    content="Imagem"
                    placeholder="Informe o endereço da imagem"
                    id="image"
                    type="url"
                    value={imageValue}
                    onChangeValue={(value) => setImagevalue(value)}
                />
                <ListaSuspensa 
                    content="Time"
                    id="team"
                    lista={times}
                    obrigatorio={true}
                    value={teamValue}
                    onChangeValue={(value) => setTeamValue(value)}
                />
                <Botao type="submit">
                    Criar card
                </Botao>
            </form>
        </section>
    )
}