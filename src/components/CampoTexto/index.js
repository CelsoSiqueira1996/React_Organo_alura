import styles from "./CampoTexto.module.css";

export function CampoTexto({ content, id, type, placeholder, obrigatorio, value, onChangeValue}) {

    function handleOnChange(event) {
        onChangeValue(event.target.value);
    }

    return (
        <div className={styles["campo-texto"]}>
            <label htmlFor={id}>{content}</label>
            <input value={value} onChange={handleOnChange} required={obrigatorio} type={type} placeholder={placeholder} id={id}/>
        </div>
    )
}