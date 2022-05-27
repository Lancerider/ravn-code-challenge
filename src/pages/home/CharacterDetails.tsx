import { useState, useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";
import { AppContextType } from "../../interfaces/AppContextType";
import { getVehicles } from "../../services/vehicles";

import style from './styles/character.module.scss';

const CharacterDetails = () => {
  const { characterSelected } = useContext(AppContext) as AppContextType;
  const [vehicles, setVehicles] = useState<string[]>([]);
  
  useEffect(() => {
    const getData = async () => {
      if(characterSelected && characterSelected.vehicles) {
        const data = await getVehicles(characterSelected.vehicles);
  
        data ? setVehicles(data) : setVehicles([]);
      }
    };

    getData();
  }, [characterSelected]);

  const characterAttributes = [
    {
      title: 'Eye Color',
      value: characterSelected?.eye_color
    },
    {
      title: 'Hair Color',
      value: characterSelected?.hair_color
    },
    {
      title: 'Skin Color',
      value: characterSelected?.skin_color
    },
    {
      title: 'Birth Year',
      value: characterSelected?.birth_year
    },
  ]

  return characterSelected && (
    <div className={style['character-details']}>
      <div className={ style.title }>
        General Information
      </div>
      {
        characterAttributes.map((character, index) => (
          <div className={ style.attribute } key={index}>
            <div className={ style['attribute-title'] }>
              { character.title }
            </div>
            <div className={ style['attribute-value'] }>
              { character.value }
            </div>
          </div>
        ))
      }
      <div className={ style.title }>
        Vehicles
      </div>
      {
        vehicles.length > 0
          ? vehicles.map((vehicle, index) => (
              <div className={ style.attribute } key={index}>
                <div className={ style['attribute-title'] }>
                  { vehicle }
                </div>
              </div>
            ))
          : (
            <div className={ style.attribute }>
              <div className={ style['attribute-title'] }>
                No vehicles reported
              </div>
            </div>
          )
      }
    </div>
  )
}

export default CharacterDetails
