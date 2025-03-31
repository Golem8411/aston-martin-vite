import styles from "../hero/hero.module.css";
import Button from "../button/button";
import blackCar from "../../assets/carro-preto.png";

const Hero = () => {
  return (
    <section className={styles.Hero}>
        <div className={styles.heroWrapper}>
            <div className={styles.heroContent}>
                <h2>DBS <span>ULTIMATE 700</span></h2>
                <p>Por mais de meio século, o nome DBS significou apenas uma coisa: a
                produção definitiva do Aston Martin.</p>
                <div className={styles.btnHero}>
                    <Button>SAIBA MAIS</Button>
                </div>
            </div>
            <div className={styles.imgHero}>
                <img src={blackCar} alt="Carro Preto" />
            </div>
        </div>
    </section>
  );
};
export default Hero;
