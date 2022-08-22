import haHexImage from '../assets/images/ha-hexagon.png';

const Header = () => {
  return (
    <>
    <header>
      <nav></nav>
      <div className={styles["header-badge"]}>
        <div className={styles["header-image"]}>
          <img src={haHexImage} />
        </div>
        <div className={styles["header-text"]}>
          <h1>Planeación Estratégica<br /> y Servicios de<br /> Construcción</h1>
          <h2>Arquitecto / Project<br /> Management</h2>
        </div>
      </div>
    </header>

    </>
  );
}
 
export default Header;