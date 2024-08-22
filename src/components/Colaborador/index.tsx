import { IColaborador } from "../../shared/interfaces/IColaborador";
import styles from "./Colaborador.module.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface ColaboradorProps {
    colaborador: IColaborador;
    cor: string;
    onDeleteComponent: (colaboradorId: string) => void;
    handleOnClickFavorite: (colaboradorId: string) => void;
}

export function Colaborador({ colaborador, cor, onDeleteComponent, handleOnClickFavorite }: ColaboradorProps) {
    const data = new Date(colaborador.data);
    
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
                <h5>
                    {`Data de entrada no time: ${new Date(data.getUTCFullYear(), data.getUTCMonth(), data.getUTCDate()).toLocaleDateString()}`}
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