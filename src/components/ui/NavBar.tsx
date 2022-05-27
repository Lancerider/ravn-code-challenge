import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

import { useContext } from 'react';

import AppContext from '../../context/AppContext';

import { AppContextType } from '../../interfaces/AppContextType';

import style from './navbar.module.scss';

const NavBar = () => {
  const { characterSelected, isMobile, setCharacterSelected } = useContext(AppContext) as AppContextType;

  return (
    <nav className={ style.navbar }>
      { isMobile && characterSelected && (
        <div
          className={style['back-button']}
          onClick={() => setCharacterSelected(null)}
        >
          <FontAwesomeIcon icon={ faArrowLeftLong } size="lg"  />
        </div>
      )}

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
