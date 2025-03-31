import styles from "../convertible/convertible.module.css"
import Button from "../button/button"
import CarroVermelho from "../../assets/carro-vermelho.png"

const Convertible = () =>{
    return(
        <section className={styles.Convertible}>
            <div className={styles.convertibleWrapper}>
                <div className={styles.convertibleContent}>
                    <h2>Velocidade e qualidade
                    aston martin!</h2>
                    <p>Obtenha os nossos melhores carros e seja seu sonho, desempenho ágil mais habilidade artesanal.</p>
                    <div className={styles.convertibleBtn}>
                        <Button>COMPRAR</Button>
                    </div>
                </div>
                <div className={styles.convertibleImg}>
                    <img src={CarroVermelho} alt="Carro Vermelho" />
                </div>
            </div>
        </section>
    );
};

export default Convertible;