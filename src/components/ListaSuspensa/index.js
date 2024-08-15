import styles from "./ListaSuspensa.module.css";

export function ListaSuspensa({ content, value, id, lista, obrigatorio, onChangeValue }) {

    function handleOnChange(event) {
        onChangeValue(event.target.value);
    }

    return (
        <div className={styles["lista-suspensa"]}>
            <label htmlFor={id}>{content}</label>
            <select value={value} id={id} required={obrigatorio} onChange={handleOnChange}>
                <option value=""></option>
                {lista.map((time) => {
                    return <option key={time.id}>{time.nome}</option>
                })}
            </select>
        </div>
    )
}