import styles from './Header.module.css';
import gcss from '../../App.module.css';
import haHexImage from '../../assets/images/ha-hexagon.png';


const Header = () => {
  return (
    <>
    <div className="uk-container">
    <header>
      <nav></nav>
      <div className={`uk-align-center uk-margin-remove-top uk-width-1-1 uk-grid uk-child-width-1-1 uk-child-width-1-2@xl uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-2@s ${styles["header-badge"]}`}>
        <img src={haHexImage} />
        <div className={styles["header-text"]}>
          <h1 className={gcss['c-00194c']}>Planeación Estratégica<br /> y Servicios de<br /> Construcción</h1>
          <h2 className={gcss['c-014067']}>Arquitecto / Project<br /> Management</h2>
        </div>
      </div>
    </header>
    </div>
    </>
  );
}
 
export default Header;