import { useContext } from "react";

import style from './styles/home.module.scss';

import AppContext from "../../context/AppContext";
import CharacterDetails from './CharacterDetails';
import CharacterList from "./CharacterList";


import { AppContextType } from "../../interfaces/AppContextType";

const Home = () => {
  const { characterSelected, isMobile } = useContext(AppContext) as AppContextType;

  return (
    <div className={ style.home }>
      { <CharacterList hide={(isMobile && !!characterSelected)} /> }

      { characterSelected && (
        <div className={style.details}>
          <CharacterDetails />
        </div>
        )
      }
    </div>
  )
};

export default Home;







