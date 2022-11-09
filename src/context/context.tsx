import { createContext, Dispatch, SetStateAction } from "react"

type TopBarContent = {
    topBarStatus: boolean,
    setTopBarStatus: Dispatch<SetStateAction<boolean>>
  }

export const TopBarContext = createContext<TopBarContent>({
        topBarStatus: true, // set a default value
        setTopBarStatus: () => {},
    });
