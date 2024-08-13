import styles from "./Banner.module.css";

export function Banner() {
    return (
        <header className={styles.banner}>
            <img 
                src="/imagens/banner.png" 
                alt="O banner principal da página do Organo" 
                className={styles.imagem__banner}
            />
        </header>
    )
}