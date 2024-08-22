import styles from "./Campo.module.css";
import { ChangeEvent, InputHTMLAttributes } from "react";

interface CampoProps extends InputHTMLAttributes<HTMLInputElement> {
    content: string;
    id: string;
    onChangeValue: (value: string) => void
}

export function Campo({ content, id, onChangeValue, ...props }: CampoProps) {

    function handleOnChangeText(event: ChangeEvent<HTMLInputElement>) {
        onChangeValue(event.target.value);
    }

    return (
        <div className={`${styles.campo} ${styles[`campo-${props.type}`]}`}>
            <label htmlFor={id}>{content}</label>
            <input onChange={handleOnChangeText} id={id} {...props}/>
        </div>
    )
}