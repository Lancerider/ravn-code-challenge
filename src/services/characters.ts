import CharacterType from "../interfaces/CharacterType";

export const getChallenges = async (): Promise<CharacterType[] | null> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/people`);

    const charactersData: CharacterType[] = (await response.json()).results;

    return charactersData;
  } catch (error) {
    return null;
  }

};

export const getCharacterSpecie = async (specieUrl: string): Promise<string> => {
  try {
    const response = await fetch(specieUrl);

    const specie: string = (await response.json()).name;

    return specie;
  } catch (error) {
    return '';
  }

};
