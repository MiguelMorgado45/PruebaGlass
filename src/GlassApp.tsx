import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import { LeftBarContext } from './context/LeftBarContext';
import AppRouter from './router/AppRouter';;

const App = () => {

  const [leftBarStatus, setLeftBarStatus] = useState<boolean>(false);

  useEffect(() => {
    const statusValue: boolean = localStorage.getItem("leftBarStatus")
      ? true
      : false;
    setLeftBarStatus(statusValue);
  }, []);

  return (
      <LeftBarContext.Provider value={{ setLeftBarStatus, leftBarStatus }}>
        <RecoilRoot>
          <AppRouter />
        </RecoilRoot>
        
      </LeftBarContext.Provider>
  )
}

export default App
