import styles from './Alcance.module.css';
import alcanceImg from '../assets/images/mi-alcance.png';
import gcss from '../App.module.css';

const Alcance = () => {
  return (
    <>
    <div className={`uk-container ${styles.container}`}>
        <div className={styles.verticalText}>
          <img src={alcanceImg} alt="Mi Alcance" />
        </div>
      <div className={styles.table}>
        <div className={styles.arrowsContainer}>
          <div className={`${styles.arrowHead} ${styles['bc-grimson']} `}><p>Project Management</p></div>
          <div className={`${styles.arrowHead} ${styles['bc-violet']} `}><p>Arquitecto,<br /> Servicios de<br />construcción</p></div>
          <div className={`${styles.arrowHead} ${styles['bc-teal']} `}><p>Director<br /> Responsable<br /> de Obra<br /> (DRO)</p></div>
          <div className={`${styles.arrowHead} ${styles['bc-olive']} `}><p>Diseño y <br />Servicios de <br />Consultoría</p></div>
          <div className={`${styles.arrowHead} ${styles['bc-sand']} `}><p>Servicios de <br />Valuación</p></div>
        </div>
        <div className="uk-panel">
          <table className={styles.tableData}>
            <thead></thead>
            <tbody>
              <tr>
                <td className={`${styles.tdDesc} ${styles['c-grimson']}`}>
                  <ul>
                    <li>Gestión de proyectos de infraestructura y recursos disponibles</li>
                    <li>Acciones oportunas/anticipar imprevistos o retrasos</li>
                    <li>Optimizar recursos a favor de proyecto</li>
                    <li>Reportes de avance Es vs Debe.</li>
                    <li>Gestión de Riesgos y Resiliencia</li>
                    <li>Puesta en marcha</li>
                  </ul>
                </td>
                <td className={`${styles.tdDesc} ${styles['c-violet']}`}>
                  <ul>
                    <li>Concepto, Anteproyectos e Ingenierías</li>
                    <li>Admon. Construcción.</li>
                    <li>Ing. de costos</li>
                    <li>Construcción</li>
                    <li>Admond. de recursos; tiempo, costo, calidad.</li>
                    <li>Entrega y puesta en marcha.</li>
                  </ul>
                </td>
                <td className={`${styles.tdDesc} ${styles['c-teal']}`}>
                  <ul>
                    <li>Cumplir con reglamentos; Municipales, Estatales y Federales.</li>
                    <li>Firma de Director Responsable de Obra, ante ayuntamientos.</li>
                    <li>Bitácora y reporte fotográfico</li>
                    <li>Cierre y entrega de obra.</li>
                  </ul>
                </td>
                <td className={`${styles.tdDesc} ${styles['c-olive']}`}>
                  <ul>
                    <li>Architecture & Diseño</li>
                    <li>Ingenierías</li>
                    <li>Definición de materiales, proceso constructivo, equipo, mano de obra, tiempos de entrega.</li>
                    <li>Análisis de alternativas</li>
                  </ul>
                </td>
                <td className={`${styles.tdDesc} ${styles['c-sand']}`}>
                  <ul>
                    <li>Determinación del valor de; inmuebles, instalación, intangibles.</li>
                    <li>Tipo de avaluó para inmuebles; Comercial o catastral</li>
                    <li>Conciliación con ayuntamientos por cobro de derechos</li>
                  </ul>
                </td>
              </tr>
              <tr className={styles.trAqua}><td colSpan={5}>PARTICIPACIONES</td></tr>
              <tr>
                <td colSpan={5}>
                  <div className={styles.areas}>
                    <div>
                      <ul>
                        <li>Naves Industriales</li>
                        <li>Casa Habitación</li>
                        <li>Educación</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>Comercio</li>
                        <li>Servicios</li>
                        <li>Restauración</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>Almacenaje</li>
                        <li>Agua Drenaje</li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}
export default Alcance;