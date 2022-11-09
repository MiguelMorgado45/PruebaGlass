import { createContext, Dispatch, SetStateAction } from "react"


type LeftBarContext = {
  leftBarStatus: boolean,
  setLeftBarStatus: Dispatch<SetStateAction<boolean>>
}

export const LeftBarContext = createContext<LeftBarContext>({
  leftBarStatus: true, // set a default value
  setLeftBarStatus: () => { },
});