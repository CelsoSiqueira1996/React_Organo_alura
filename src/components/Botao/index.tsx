import { ReactNode } from "react";
import styles from "./Botao.module.css";

interface BotaoProps {
    children: ReactNode;
    type?: "submit" | "reset" | "button";
}

export function Botao({type, children}: BotaoProps) {
    return (
        <button className={styles.botao} type={type}>{children}</button>
    )
}