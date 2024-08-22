import styles from "./Formulario.module.css";
import { Campo } from "../Campo";
import { Botao } from "../Botao";
import { FormEvent, useState } from "react";
import { ListaSuspensa } from "../ListaSuspensa";
import { ITime } from "../../shared/interfaces/ITime";
import { IColaborador } from "../../shared/interfaces/IColaborador";


interface FormularioProps {
    times: ITime[];
    onRegisterCollaborator: (colaborador: IColaborador) => void;
    onCreateTeam: (novoTime: ITime) => void;
}

export function Formulario({ onRegisterCollaborator, times, onCreateTeam }: FormularioProps) {

    const [nameValue, setNameValue] = useState<string>('');
    const [roleValue, setRoleValue] = useState<string>('');
    const [imageValue, setImageValue] = useState<string>('');
    const [teamValue, setTeamValue] = useState<string>('');
    const [teamNameValue, setTeamNameValue] = useState<string>('');
    const [teamColor, setTeamColor] = useState<string>('#000000');
    const [dateValue, setDateValue] = useState<string>('');

    function handleOnSubmitForm(event: FormEvent) {
        event.preventDefault();
        const collaborator: IColaborador  = {
            nome: nameValue,
            cargo:  roleValue,
            imagemUrl: imageValue,
            time: teamValue,
            favorito: false,
            id: "",
            data: dateValue
        }

        onRegisterCollaborator(collaborator);

        setImageValue('');
        setNameValue('');
        setRoleValue('');
        setTeamValue('');
        setTeamNameValue('');
        setTeamColor('#000000');
        setDateValue('');
    }

    function handleOnCreateTeam(event: FormEvent) {
        event.preventDefault();
        const newTeam: ITime = {
            nome: teamNameValue,
            cor: teamColor,
            id: ''
        }

        onCreateTeam(newTeam);

        setImageValue('');
        setNameValue('');
        setRoleValue('');
        setTeamValue('');
        setTeamNameValue('');
        setTeamColor('#000000');
        setDateValue('');
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
                <Campo 
                    content="Data de entrada no time"
                    id="date"
                    type="date"
                    required
                    value={dateValue}
                    onChangeValue={(value) => setDateValue(value)}
                />
                <ListaSuspensa 
                    content="Time"
                    id="team"
                    lista={times}
                    required
                    value={teamValue}
                    onChangeValue={(value: string) => setTeamValue(value)}
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