import { IColaborador } from "../../shared/interfaces/IColaborador";
import { ITime } from "../../shared/interfaces/ITime";
import { Colaborador } from "../Colaborador";
import styles from "./Time.module.css";
import hexToRgba from "hex-to-rgba";



interface TimeProps {
    timeDaVez: ITime;
    collaborators: IColaborador[];
    deleteCollaboratorFromList: (colaboradorId: string) => void;
    handleOnChangeColor: (cor: string, TimId: string) => void;
    onClickFavorite: (colaboradorId: string) => void;
}

export function Time({ timeDaVez,  collaborators, deleteCollaboratorFromList, handleOnChangeColor, onClickFavorite }: TimeProps) {
    return(
        (collaborators.length > 0) && 
        <section 
            className={styles.time} 
            style={{backgroundImage: 'url(/imagens/fundo.png)', 
                backgroundColor: hexToRgba(timeDaVez.cor, '0.6')
            }}
        >
            <input 
                value={timeDaVez.cor}  
                type="color" 
                className={styles["input-cor"]} 
                onChange={(event) => handleOnChangeColor(event.target.value, timeDaVez.id)}
            />
            <h3 style={{borderBottomColor: timeDaVez.cor}}>{timeDaVez.nome}</h3>
            <div className={styles.colaboradores}>
                {collaborators.map((collaborator) => <Colaborador 
                    key={collaborator.id} 
                    colaborador={collaborator} 
                    cor={timeDaVez.cor}
                    onDeleteComponent={deleteCollaboratorFromList}
                    handleOnClickFavorite={onClickFavorite}
                />)}
            </div>
        </section>
    )
}