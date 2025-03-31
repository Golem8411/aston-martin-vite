import styles from "../vantage/vantage.module.css"
import Button from "../button/button";
import CarroCinza from "../../assets/carrow-cinza.png"
const Vantage = () =>{
    return(
        <section className={styles.Vantage}>
            <div className={styles.vantageWrapper}>
                <div className={styles.vantageImg}>
                    <img src={CarroCinza} alt="Carro cinza" />
                </div>
                <div className={styles.vantageContent}>
                    <p>Vantage é cru e instintivo, inabalável em seu propósito singular: dominar os sentidos através de seu design de renome mundial, desempenho ágil e habilidade artesanal dedicada.</p>
                    <div className={styles.btnVantage}>
                        <Button>COMPRAR</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vantage;