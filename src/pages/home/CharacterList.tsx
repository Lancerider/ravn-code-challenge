import { useState, useEffect } from "react";

import characterStyle from './styles/character.module.scss';

import CharacterListItem from './CharacterListItem';
import ErrorLoading from '../../components/common/ErrorLoading';
import Loader from '../../components/common/Loader';
import NoItems from './NoItems';

import { getChallenges } from "../../services/characters";

import CharacterType from "../../interfaces/CharacterType";

type CharacterListProps = {
  hide: boolean
}

const CharacterList = (props: CharacterListProps) => {
  const [characters, setCharacters] = useState<CharacterType[] | null>(null);
  const [errorLoading, setErrorLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const { hide } = props;
  
  const getData = async () => {
    setErrorLoading(false)
    setLoading(true)

    const characters = await getChallenges();
    
    characters ? setCharacters(characters) : setErrorLoading(true);

    setLoading(false)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className={ characterStyle['characters-menu'] }
      style={{ display: hide ? 'none' : 'flex' }}
    >
      { errorLoading && <ErrorLoading /> }

      { characters && characters.length > 0 && (
        <div className={ characterStyle['characters-list'] }>
          {
            characters.map((character, index) => (
              <CharacterListItem character={ character } key={ index } />
            ))
          }
        </div>
      )}
      
      { characters && characters.length === 0 && (
        <NoItems />
      )}

      { loading && <Loader /> }
    </div>
  )
};

export default CharacterList;







