import { useEffect, useState } from "react"
import { MOBILE_SCREEN_WIDTH } from "../constants/general";

import { AppContextType } from "../interfaces/AppContextType";
import CharacterType from "../interfaces/CharacterType";

const useInitialState = (): AppContextType => {
  const [characterSelected, setCharacterSelected] = useState<CharacterType | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= MOBILE_SCREEN_WIDTH);

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= MOBILE_SCREEN_WIDTH);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return {
    isMobile,
    characterSelected,
    setCharacterSelected,
  };
}

export default useInitialState;