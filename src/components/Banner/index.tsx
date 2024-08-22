import styles from "./Banner.module.css";

interface BannerProps {
    src: string;
    alt?: string;
}

export function Banner({ src, alt }: BannerProps) {
    return (
        <header className={styles.banner}>
            <img 
                src={src}
                alt={alt}
                className={styles.imagem__banner}
            />
        </header>
    )
}