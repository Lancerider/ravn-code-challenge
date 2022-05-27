import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';

import { getPlanet } from '../../services/planets';
import { getCharacterSpecie } from '../../services/characters';

import Character from "../../interfaces/CharacterType";
import { AppContextType } from '../../interfaces/AppContextType';

import style from './styles/character.module.scss';


type CharacterListItemProps = {
  character: Character;
}

const CharacterListItem = (props: CharacterListItemProps) => {
  const { character } = props;
  const [homeworld, setHomeworld] = useState('');
  const [specie, setSpecie] = useState('');

  const { setCharacterSelected } = useContext(AppContext) as AppContextType;
  
  useEffect(() => {
    const getData = async () => {
      if (character.homeworld) {
        const home = await getPlanet(character.homeworld);
        setHomeworld(home);
      }
      

      if (character.species && character.species.length > 0) {
        const specieResult = await getCharacterSpecie(character.species[0]);
  
        setSpecie(specieResult);
      }
    }

    getData();
  }, [character]);

  const handleClick = (character: Character): void => {
    setCharacterSelected(character);
  }

  return (
    <div className={ style.character } onClick={ () => handleClick(character) }>
      <div className={ style.content }>
        <div className={ style.title }>
          { character.name }
        </div>
        <div className={ style['sub-title'] }>
          { specie && `${specie} ` }
          { homeworld && `from ${homeworld}` }
        </div>
      </div>
      <FontAwesomeIcon pull="left" icon={ faAngleRight } />
    </div>
  );
};

export default CharacterListItem;