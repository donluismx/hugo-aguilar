import Logo from '../Logo';

import styles from './Header.module.css';


const Header = () => {
  return (
    <>
    <div className="uk-container">
    <header>
      <nav></nav>
      <Logo />
    </header>
    </div>
    </>
  );
}
 
export default Header;