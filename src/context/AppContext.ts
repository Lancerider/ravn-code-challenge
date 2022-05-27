import { createContext } from "react";
import { AppContextType } from "../interfaces/AppContextType";

const AppContext = createContext<AppContextType | null>(null);

export default AppContext;
