import styles from "./Formulario.module.css";
import { Campo } from "../Campo";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";
import { useState } from "react";

export function Formulario({ onRegisterCollaborator, times, onCreateTeam }) {

    const [nameValue, setNameValue] = useState('');
    const [roleValue, setRoleValue] = useState('');
    const [imageValue, setImageValue] = useState('');
    const [teamValue, setTeamValue] = useState('');
    const [teamNameValue, setTeamNameValue] = useState('');
    const [teamColor, setTeamColor] = useState('#000000');

    function handleOnSubmitForm(event) {
        event.preventDefault();
        const collaborator = {
            nome: nameValue,
            cargo:  roleValue,
            imagemUrl: imageValue,
            time: teamValue,
            favorito: false
        }

        onRegisterCollaborator(collaborator);

        setImageValue('');
        setNameValue('');
        setRoleValue('');
        setTeamValue('');
        setTeamNameValue('');
        setTeamColor('#000000');
    }

    function handleOnCreateTeam(event) {
        event.preventDefault();
        const newTeam = {
            nome: teamNameValue,
            cor: teamColor
        }

        onCreateTeam(newTeam);

        setImageValue('');
        setNameValue('');
        setRoleValue('');
        setTeamValue('');
        setTeamNameValue('');
        setTeamColor('#000000');
    }

    return (
        <section className={styles.formulario}>
            <form onSubmit={handleOnSubmitForm}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    content="Nome"
                    placeholder="Digite seu nome"
                    id="name"
                    type="text"
                    required
                    value={nameValue}
                    onChangeValue={(value) => setNameValue(value)}
                />
                <Campo 
                    content="Cargo"
                    placeholder="Digite seu cargo"
                    id="role"
                    type="text"
                    required
                    value={roleValue}
                    onChangeValue={(value) => setRoleValue(value)}
                />
                <Campo 
                    content="Imagem"
                    placeholder="Informe o endereço da imagem"
                    id="image"
                    type="url"
                    value={imageValue}
                    onChangeValue={(value) => setImageValue(value)}
                />
                <ListaSuspensa 
                    content="Time"
                    id="team"
                    lista={times}
                    required
                    value={teamValue}
                    onChangeValue={(value) => setTeamValue(value)}
                />
                <Botao type="submit">
                    Criar card
                </Botao>
            </form>
            <form onSubmit={handleOnCreateTeam}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    content="Nome"
                    placeholder="Digite o nome do time"
                    id="teamName"
                    type="text"
                    required
                    value={teamNameValue}
                    onChangeValue={(value) => setTeamNameValue(value)}
                />
                <Campo 
                    content="Cor"
                    id="color"
                    type="color"
                    required
                    value={teamColor}
                    onChangeValue={(value) => setTeamColor(value)}
                />
                <Botao type="submit">
                    Criar time
                </Botao>
            </form>
        </section>
    )
}