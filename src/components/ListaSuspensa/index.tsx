import { ITime } from "../../shared/interfaces/ITime";
import styles from "./ListaSuspensa.module.css";
import { ChangeEvent } from "react";

interface ListaSuspensaProps {
    content: string;
    value: string;
    id: string;
    lista: ITime[];
    required: boolean;
    onChangeValue: (nomeTime: string) => void;
}

export function ListaSuspensa({ content, value, id, lista, required, onChangeValue }: ListaSuspensaProps) {

    function handleOnChange(event: ChangeEvent<HTMLSelectElement>) {
        onChangeValue(event.target.value);
    }

    return (
        <div className={styles["lista-suspensa"]}>
            <label htmlFor={id}>{content}</label>
            <select value={value} id={id} required={required} onChange={handleOnChange}>
                <option value=""></option>
                {lista.map((time) => {
                    return <option key={time.id}>{time.nome}</option>
                })}
            </select>
        </div>
    )
}