import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Character from "../../interfaces/CharacterType";
import style from './character.module.scss';

type CharacterListItemProps = {
  character: Character;
}

const CharacterListItem = (props: CharacterListItemProps) => {
  const { character } = props;

  return (
    <div className={ style.character }>
      <div className={ style.content }>
        <div className={ style.title }>
          { character.name }
        </div>
        <div className={ style['sub-title'] }>
          { `from ${character.name}` }
        </div>
      </div>
      <FontAwesomeIcon pull="left" icon={ faAngleRight } />
    </div>
  );
};

export default CharacterListItem;