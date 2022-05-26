import CharacterType from "../interfaces/CharacterType";

const getChallenges = async (): Promise<CharacterType[] | null> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/people`,
      {
        method: "GET",
      }
    );

    const charactersData: CharacterType[] = (await response.json()).results;

    return charactersData;
  } catch (error) {
    return null;
  }

};

export { getChallenges };