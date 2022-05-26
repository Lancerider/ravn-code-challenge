import { useState, useEffect } from "react";

import style from './home.module.scss';
import characterStyle from './character.module.scss';

import CharacterDetails from './CharacterDetails';
import CharacterListItem from './CharacterListItem';
import ErrorLoading from '../../components/common/ErrorLoading';
import Loader from '../../components/common/Loader';
import NoItems from './NoItems';
import { getChallenges } from "../../services/characters";

import CharacterType from "../../interfaces/CharacterType";

const Home = () => {
  const [characters, setCharacters] = useState<CharacterType[] | null>(null);
  const [errorLoading, setErrorLoading] = useState(false);
  const [loading, setLoading] = useState(false);


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
    <div className={ style.home }>
      <div className={ characterStyle['characters-menu'] }>
        { errorLoading && <ErrorLoading /> }

        { characters && (
          characters.length > 0
          ? <div className={ characterStyle['characters-list'] }>
                { characters.map((character, index) => (
                  <CharacterListItem character={ character } key={ index } />
                  )) }
              </div>
          : <NoItems />
        )}

        { loading && <Loader /> }
      </div>
    </div>
  )
};

export default Home;







