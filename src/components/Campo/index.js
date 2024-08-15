import styles from "./Campo.module.css";

export function Campo({ content, id, onChangeValue, ...props}) {

    function handleOnChangeText(event) {
        onChangeValue(event.target.value);
    }

    return (
        <div className={`${styles.campo} ${styles[`campo-${props.type}`]}`}>
            <label htmlFor={id}>{content}</label>
            <input onChange={handleOnChangeText} id={id} {...props}/>
        </div>
    )
}