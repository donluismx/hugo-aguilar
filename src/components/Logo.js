import styles from './Logo.module.css';
import gcss from '../App.module.css';
import haHexImage from '../assets/images/ha-hexagon.png';

const Logo = () => {
  return (
    <div className={`uk-align-center uk-margin-remove-top uk-width-1-1 uk-grid uk-child-width-1-1 uk-child-width-1-2@xl uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-2@s ${styles["logo-badge"]}`}>
        <img src={haHexImage} />
        <div className={styles["logo-text"]}>
          <h1 className={gcss['c-00194c']}>Planeación Estratégica<br /> y Servicios de<br /> Construcción</h1>
          <h2 className={gcss['c-014067']}>Arquitecto / Project<br /> Management</h2>
        </div>
      </div>
    );
}
 
export default Logo;