import styles from "./Colaborador.module.css";

export function Colaborador({ colaborador, corPrimaria }) {
    return (
        <div className={styles.colaborador}>
            <div className={styles.cabecalho} style={{ backgroundColor: corPrimaria }}>
                <img src={colaborador.imagemUrl} alt={colaborador.nome}/>
            </div>
            <div className={styles.rodape}>
                <h4>
                    {colaborador.nome}
                </h4>
                <h5>
                    {colaborador.cargo}
                </h5>
            </div>
        </div>
    )
}