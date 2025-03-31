import styles from "../footer/footer.module.css";
import Logo from "../../assets/logo-bottom.svg";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerImg}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.footerP}>
          <p>
            Os valores de emissões/economia de combustível citados são
            provenientes de resultados de testes regulamentados oficiais obtidos
            através de testes de laboratório. Servem apenas para fins de
            comparabilidade e podem não refletir a sua experiência de condução
            real, que pode variar dependendo de fatores como condições da
            estrada, condições meteorológicas, carga do veículo e estilo de
            condução.
          </p>
        </div>
        <div className={styles.footerB}>
          <div>
            <p className={styles.footerRights}>
              © 2023 Aston Martin. Todos os direitos reservados.
            </p>
          </div>
          <div>
            <a className={styles.footerA} href="">
              Políticas de Privacidade
            </a>
            <a className={styles.footerA} href="">
              Termo de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
