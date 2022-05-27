import CharacterType from "./CharacterType";

export type AppContextType = {
  isMobile: boolean,
  characterSelected: CharacterType | null,
  setCharacterSelected: (character: CharacterType | null) => void,
}
