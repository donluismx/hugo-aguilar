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
          <div className={`${styles.arrowHead} ${styles['bc-grimson']} `}><p>Some title and stuff</p></div>
          <div className={`${styles.arrowHead} ${styles['bc-violet']} `}><p>Some title and stuff</p></div>
          <div className={`${styles.arrowHead} ${styles['bc-teal']} `}><p>Some title and stuff</p></div>
          <div className={`${styles.arrowHead} ${styles['bc-olive']} `}><p>Some title and stuff</p></div>
          <div className={`${styles.arrowHead} ${styles['bc-sand']} `}><p>Some title and stuff</p></div>
        </div>
        <div className="uk-panel">
          <table className={styles.tableData}>
            <thead></thead>
            <tr>
              <td>
                <ul>
                  <li>Gestión de proyectos de infraestructura y recursos disponibles</li>
                  <li>Acciones oportunas/anticipar imprevistos o retrasos</li>
                  <li>Optimizar recursos a favor de proyecto</li>
                  <li>Reportes de avance Es vs Debe.</li>
                  <li>Gestión de Riesgos y Resiliencia</li>
                  <li>Puesta en marcha</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Concepto, Anteproyectos e Ingenierías</li>
                  <li>Admon. Construcción.</li>
                  <li>Ing. de costos</li>
                  <li>Construcción</li>
                  <li>Admond. de recursos; tiempo, costo, calidad.</li>
                  <li>Entrega y puesta en marcha.</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Cumplir con reglamentos; Municipales, Estatales y Federales.</li>
                  <li>Firma de Director Responsable de Obra, ante ayuntamientos.</li>
                  <li>Bitácora y reporte fotográfico</li>
                  <li>Cierre y entrega de obra.</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Architecture & Diseño</li>
                  <li>Ingenierías</li>
                  <li>Definición de materiales, proceso constructivo, equipo, mano de obra, tiempos de entrega.</li>
                  <li>Análisis de alternativas</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Determinación del valor de; inmuebles, instalación, intangibles.</li>
                  <li>Tipo de avaluó para inmuebles; Comercial o catastral</li>
                  <li>Conciliación con ayuntamientos por cobro de derechos</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}
 
export default Alcance;