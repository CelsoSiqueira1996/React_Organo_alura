import { Colaborador } from "../Colaborador";
import styles from "./Time.module.css";

export function Time({ timeDaVez,  collaborators }) {
    return(
        (collaborators.length > 0) && <section className={styles.time} style={{backgroundColor: timeDaVez.corSecundaria}}>
            <h3 style={{borderBottomColor: timeDaVez.corPrimaria}}>{timeDaVez.nome}</h3>
            <div className={styles.colaboradores}>
                {collaborators.map((collaborator) => <Colaborador 
                    key={collaborator.nome} 
                    colaborador={collaborator} 
                    corPrimaria={timeDaVez.corPrimaria}
                />)}
            </div>
        </section>
    )
}