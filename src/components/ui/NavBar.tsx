import { useContext } from 'react';

import AppContext from '../../context/AppContext';

import { AppContextType } from '../../interfaces/AppContextType';

import style from './navbar.module.scss';

const NavBar = () => {
  const { characterSelected, isMobile } = useContext(AppContext) as AppContextType;

  return (
    <nav className={ style.navbar }>
      <div className={ style.title }>
        { isMobile
          ? characterSelected ? characterSelected.name : 'People of Star Wars'
          : 'Ravn Star Wars Registry'
        }
      </div>
    </nav>
  )
}

export default NavBar;
