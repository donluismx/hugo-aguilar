import styles from './Resumen.module.css';
import gcss from '../App.module.css';
import sigsaImg from '../assets/images/sigsa.jpg';
import haPhoto from '../assets/images/ha-photo.png';

const Resumen = () => {
  return ( 
    <>
    <div className={`uk-container ${styles.resumenContainer}`}>
          <h1 className={gcss['c-00194c']}>Líder de proyectos de infraestructura</h1>
      <div className="uk-grid uk-flex uk-flex-right">
        <div className="uk-width-1-1 uk-width-5-6@xl uk-width-5-6@l uk-width-5-6@m uk-width-1-1@s">

          <div class="uk-panel">
            <img className={`uk-align-left uk-margin-remove-adjacent ${styles.photo}`} src={haPhoto} width="150"  alt="Example image" />
            <h3 className={`${styles.h3} ${gcss['c-3f3f3f']}`}>Hugo L. Aguilar</h3>
            <h3 className={`${styles.h3} ${gcss['c-3f3f3f']}`}>Gestor de proyectos, analista de riesgos en el proceso de construcción.</h3>
            <h3 className={`${styles.h3} ${gcss['.c-3f3f3f']}`}>Project Management y Director de Obra, certificado.</h3>
            <ul className={`${styles.ul} ${gcss['c-746b62']}`}>
              <li>25+ años de experiencia</li>
              <li>Meta: Maximizar el retorno de inversión del cliente, en corto tiempo, reduciendo
            el gasto de inversión en infraestructura y/o optimizando recursos.</li>
              <li>Tipos de proyectos: Casa Habitación (interés social y residencial), servicios,
            Industrial y comercial, especial experiencia en naves del sector automotriz.</li>
              <li>Permanente formación de proveedores, para generar aliados competentes
            en proyectos actuales y futuros.</li>
            </ul>
          </div>
          <div className="uk-padding-small uk-width-1-1"></div>
          <div className="uk-width-1-1">
            <div className="uk-width-1-1 uk-child-width-1-2@xl uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-2@s uk-grid">
              <div>
                <div class="uk-inline">
                  <img src={sigsaImg} width="auto" alt="SIGsa Edificio de procesos ortográficos y topografía especializada, Tulantepec Hidalgo" />
                  <div class={`uk-overlay uk-overlay-default uk-position-bottom ${styles.overlay}`}>
                    <p><b>SIGsa Edificio de procesos ortográficos y topografía especializada.</b><br /> Tulantepec Hgo.</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="uk-inline">
                  <img src={sigsaImg} width="auto" alt="" />
                  <div class={`uk-overlay uk-overlay-default uk-position-top ${styles.overlay}`}>
                    <p><b>VWM, Project Management diseño y ejecución de Obra Civil proyecto TIguan.</b><br />
                    Cuautlancingo, Puebla</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   );
}
 
export default Resumen;