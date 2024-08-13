import styles from "./Botao.module.css";

export function Botao({type, children}) {
    return (
        <button className={styles.botao} type={type}>{children}</button>
    )
}