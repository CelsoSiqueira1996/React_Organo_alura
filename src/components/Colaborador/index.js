import styles from "./Colaborador.module.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export function Colaborador({ colaborador, cor, onDeleteComponent, handleOnClickFavorite }) {
    return (
        <div className={styles.colaborador}>
            <AiFillCloseCircle 
                title="Deletar Colaborador" 
                className={styles.deletar} 
                onClick={() => onDeleteComponent(colaborador.id)} 
                size={25}    
            />
            <div className={styles.cabecalho} style={{ backgroundColor: cor }}>
                <img src={colaborador.imagemUrl} alt={colaborador.nome}/>
            </div>
            <div className={styles.rodape}>
                <h4>
                    {colaborador.nome}
                </h4>
                <h5>
                    {colaborador.cargo}
                </h5>
                <div className={styles.favoritar} onClick={() => handleOnClickFavorite(colaborador.id)}>
                    {colaborador.favorito
                        ? <AiFillHeart size={30} color="#ff0000" /> 
                        : <AiOutlineHeart size={30} />
                    }
                </div>
            </div>
        </div>
    )
}